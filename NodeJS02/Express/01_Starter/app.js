//&ExpressJS is a framework === Collection of Libraries is called framework.A Library is a set of prewritten code.

//~Install express JS
//~import express
//~create server

import express from "express";

const app = express(); //?app is an object returned by the express
const PORT = 9000;

//&routes
//?app.METHOD("/path", callback)

app.get("/", (req, res) => {
  //   res.send("HomePage");
  res.json({ message: "HomePage" });
});

app.get("/about", (req, res) => {
  res.send("AboutPage");
});

app.get("/contacts", (req, res) => {
  res.send("Contacts Page");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server started at port", PORT);
});
