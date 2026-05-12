import { User } from "../models/user-model.js";
import { verifyEmail } from "../config/verify-mail.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Session } from "../models/session-model.js";
import { sendOtpMail } from "../config/otp-mail.js";

// ================= REGISTER =================
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All input fields are required!",
      });
    }

    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      isVerified: false,
    });

    // generate verification token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    // send verification mail
    await verifyEmail(token, email);

    // save token
    newUser.token = token;
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User registered. Please verify email.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ================= EMAIL VERIFICATION =================
export const verification = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        success: false,
        message: "Token is missing or invalid",
      });
    }

    const token = authHeader.split(" ")[1];

    let decodedInfo;

    try {
      decodedInfo = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({
          success: false,
          message: "Token expired",
        });
      }

      return res.status(400).json({
        success: false,
        message: "Token verification failed",
      });
    }

    const user = await User.findById(decodedInfo.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.isVerified = true;
    user.token = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// ================= LOGIN =================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All inputs are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Password mismatch",
      });
    }

    // check email verification
    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email first",
      });
    }

    // remove old sessions if exist
    await Session.deleteMany({ userId: user._id });

    // create new session
    await Session.create({
      userId: user._id,
    });

    // generate tokens
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    user.isLoggedIn = true;
    await user.save();

    return res.status(200).json({
      success: true,
      message: `Welcome Back ${user.username}`,
      accessToken,
      refreshToken,
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// ================= LOGOUT =================
export const logout = async (req, res) => {
  try {
    const userId = req.userId;

    await Promise.allSettled([
      Session.deleteMany({ userId }),
      User.findByIdAndUpdate(userId, {
        isLoggedIn: false,
      }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// ================= FORGOT PASSWORD =================
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // expiry time => 10 mins
    const expiry = new Date(Date.now() + 10 * 60 * 1000);

    user.otp = otp;
    user.otpExpiry = expiry;

    await user.save();

    // send otp mail
    await sendOtpMail(email, otp);

    return res.status(200).json({
      success: true,
      message: `OTP sent to ${email}`,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// ================= VERIFY OTP =================
export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const email = req.params.email;

    if (!otp) {
      return res.status(400).json({
        success: false,
        message: "OTP is required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.otp || !user.otpExpiry) {
      return res.status(400).json({
        success: false,
        message: "OTP not generated or already verified",
      });
    }

    // check expiry
    if (user.otpExpiry < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new one.",
      });
    }

    // verify otp
    if (otp !== user.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // clear otp
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= CONFIRM PASSWORD =================
export const confirmPassword = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    const email = req.params.email;

    if (!newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password mismatch",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // save password
    user.password = hashedPassword;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
