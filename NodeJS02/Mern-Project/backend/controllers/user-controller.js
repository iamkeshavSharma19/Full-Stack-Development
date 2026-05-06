import { User } from "../models/user-model.js";
import { verifyEmail } from "../config/verify-mail.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Session } from "../models/session-model.js";

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

    // password hash
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      isVerified: false, // important for email verification
    });

    // generate token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    // send email
    await verifyEmail(token, email);

    // store token (optional)
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

    // update user as verified
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

    // check if verified
    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email first",
      });
    }

    //~for login the user, we have to create one more session for user.
    //&is there any exising session for the user or not ???
    
    const existingSession = await Session.findOne({ userId: user._id });

    if (existingSession) {
      await Session.deleteOne({ userId: user._id });
    }

    //! create new session
    await Session.create({ userId: user._id });

    //! create accessToken
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
      user: { username: user.username },
    });

    // login token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
