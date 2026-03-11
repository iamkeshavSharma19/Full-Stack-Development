import fs from "node:fs";
import path from "node:path";
import connectDB from "../config/database-config.js";

export const displayHomePage = (req, res) => {
  res.send("<h1>this is home page</h1>");
};

export const displayFormPage = (req, res) => {
  let filePath = path.join(import.meta.dirname, "..", "pages", "form.html");
  fs.createReadStream(
    path.join(import.meta.dirname, "..", "pages", "form.html"),
    "utf-8",
  ).pipe(res);
};

export const submitForm = async (req, res) => {
  console.log(req.body);
  let { userEmail, userPassword } = req.body;

  let myColl = await connectDB();
  let op = await myColl.insertOne({ userEmail, userPassword });

  res.status(201).json({
    //?201 is for created
    success: true,
    message: "User registered Successfully",
    data: { userEmail, userPassword },
  });
};

// export const getAllUsers = async (req, res, next) => {

// }
