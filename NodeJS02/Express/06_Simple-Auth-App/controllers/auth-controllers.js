import Users from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//^for hashing the password we will use bcrypt

export async function handleRegister(req, res) {
  try {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "input data is missing",
      });
    }
    let { username, email, password, role } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all input fields are required",
      });
    }
    //&before redistering a user we have to check whether a user is already registered or not
    let existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
      });
    }

    //^password hash using bcrypt.
    //! what is salt === password = 123456, salt = 1Ab48nmb89n2js8.with the help of these salt characters my password hash will be created, my hashPassword will be a mix of salt characters and my original password.
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    let newUser = await Users.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (!newUser) {
      return res.status(400).json({
        success: false,
        message: "unable to create",
      });
    }

    res.status(201).json({
      success: true,
      message: "user created",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
export async function handleLogin(req, res) {
  console.log("login route");
  console.log(req.body);
  let { email, password } = req.body;
  console.log(email);
  console.log(password);
  try {
    let { email, password } = req.body;

    let user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found! please register first",
      });
    }

    //^compare password
    let isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Password mismatched",
      });
    }

    //^if password matched then we have to create a token, for that we again have to install a third party library i.e JWT.inside the token user's information will also be included in the salted form, we also have to tell the expiry time after the token will be expired and the user will be automatically logged out.

    const accessToken = jwt.sign(
      {
        //~data of user present in token
        id: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }, //1h === 1hour
    );

    res.status(200).json({
      success: true,
      message: "login successful",
      accessToken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
//!if we do changes in env file then we again have to restart the server.
