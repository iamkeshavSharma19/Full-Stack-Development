import { User } from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verify } from "../config/verify-mail.js";

export async function register(req, res) {
  console.log("Register Api hit");
  try {
    let { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    //?we have to check whether this user already exists in database or not by checking either email or username
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }
    //?If the user is new then we have to store it in the database and also we have to hash the user's password by using bcrypt library.
    const hashedPassword = await bcrypt.hash(password, 10);

    //~Storing the user inside the database
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    //?Once the user is created, then we have to verify email as well

    //?If the user is created then we will create a json web token for the user.
    //! Generating the token.
    //! in that token there must be some details of the user, id of the user is unique, so we will keep the user id inside the token
    //?In our token our newUser's id will be there along with it this jwt secret would also be there, our json web wil be the mix up of these 2.
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    //?Once the token is generated then we have to send an email also to the the user for the verification, for that we will install nodemailer as well as the handlebars packages.inside config folder make new file ==> verify-mail.js

    //!VERIFYING EMAIL
    //~FUNCTION CALL
    verify(token, email);

    res.status(201).json({
      success: true,
      message: "User created",
      data: newUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}

export async function verifyEmail(req, res) {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}
export async function login(req, res) {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}
export async function logout(req, res) {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}
