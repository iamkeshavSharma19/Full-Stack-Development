import Users from "../models/user-model.js";
import bcrypt from "bcrypt";

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

    //^password hash using bcrypt
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
export async function handleLogin(req, res) {}

//! what is salt === password = 123456, salt = 1Ab48nmb89n2js8.with the help of these salt characters my password hash will be created, my hashPassword will be a mix of salt characters and my original password.
