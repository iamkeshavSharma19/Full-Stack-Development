import express from "express";
import fs from "node:fs";

import mongodb from "mongodb";

async function connectDB() {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("Task1");
  let collection = await database.createCollection("users");
  return collection;
}

const app = express();
const PORT = 9001;

//?Middleware === html data coming from form will be parsed by this middleware.
app.use(express.urlencoded({ extended: true })); //&Parses form data

app.get("/", (req, res) => {
  let src = fs.createReadStream("./pages/index.html", "utf-8"); //createReadStream will read the file in chunks..that's why we use createReadStream
  console.log(src);
  src.pipe(res);
});

//~form will hit the POST request to this route handler
app.post("/submit", async (req, res) => {
  //   console.log("Hii");
  //&form data will come inside the req.body
  //   console.log(req.body);
  let { username, email, password } = req.body;
  try {
    //&calling connectDB === async function
    let collection = await connectDB();
    collection.insertOne({ username, email, password });
    res.json({ message: "User created" });
    res.send("Form Data received At The Backend");
  } catch (error) {
    console.log(error);
    res.json({ message: "unable to create user" });
  }
});

//&GET Method to get all the users from the
app.get("/all", async (req, res) => {
  try {
    let collection = await connectDB();
    let users = await collection.find({}).toArray();
    res.json({ data: users });
  } catch (error) {
    console.log(error);
    res.json({ message: "unable to get all users" });
  }
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server started at PORT", PORT);
});
