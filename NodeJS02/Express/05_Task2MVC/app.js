import express from "express";

const app = express();

const PORT = 8000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`App is listening on the PORT, ${PORT}`);
});
