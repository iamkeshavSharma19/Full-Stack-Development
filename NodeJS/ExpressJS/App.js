import express from "express";
import fs from "node:fs";
import path from "node:path";
import routesFile from "./routes/routes.js";

let app = express();

//?global level middlewares -> this will run for every request
app.use(express.urlencoded({ extended: true })); //!Middleware
app.use("/api/v1", routesFile); //?Global level middleware

// app.get("/", (req, res) => {
//   res.send("this is home page");
// });

console.log(import.meta.dirname); //~this will give the absolute path of the current folder in which the file is present.

console.log(path.join(import.meta.dirname, "pages", "form.html"));

// app.get("/form", (req, res) => {
//   //   res.send("this is form page");
//   let readStream = fs.createReadStream(
//     path.join(import.meta.dirname, "pages", "form.html"),
//     "utf-8",
//   );

//   readStream.pipe(res);
// });

//?to submit form
//?url = http://localhost:9000/register
//?method = post

// app.post("/register", (req, res) => {
//   //~type of req.body is object.
//   //console.log(req.body);
//   let { userEmail, userPassword } = req.body;
//   let existingData = fs.readFileSync("./db/data.json", "utf-8");
//   console.log(existingData);
//   let data = JSON.parse(existingData);
//   console.log(data);
//   const obj = {
//     email: userEmail,
//     password: userPassword,
//   };
//   data.push(obj);
//   fs.writeFileSync(
//     // path.join(import.meta.dirname, "db", "data.json"),
//     "./db/data.json",
//     JSON.stringify(data, null, 2),
//   );
//   console.log(data);
//   res.send("form submitted");
// });

//?ways to access the form data
//! req.body ==> content
//! req.params ==> till questionMark (before question mark)
//! req.query ==> Anything After questionMark => key-value pair

//!src.pipe(des)



app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running on port 9000");
});
