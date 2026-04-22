import fs from "node:fs";
import path from "node:path";
import { connectDB } from "../config/database.js";

//&So here the path module will itself take care of the "/".No need to put it inside the code..
export function getHTMLPage(req, res) {
  let filePath = path.join(import.meta.dirname, "..", "pages", "index.html");
  let src = fs.createReadStream(filePath, "utf-8");
  src.pipe(res);
}

export async function handleFormSubmit(req, res) {
  let { username, email, password } = req.body;
  let collection = await connectDB();
  collection.insertOne({ username, email, password });
  res.json({ message: "User Created" });
}

export async function handleGetAllUsers(req, res) {
  let collection = await connectDB();
  let users = await collection.find({}).toArray();
  res.json({
    message: "fetched all users",
    data: users,
  });
}
