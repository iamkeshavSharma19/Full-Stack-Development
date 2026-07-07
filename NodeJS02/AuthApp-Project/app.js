import dotenv from "dotenv";
//?When we call config function, present inside dotenv, then we can easily access env variable
//~for removing it == injected env (1) from .env // tip: ⌁ auth for agents [www.vestauth.com], always use {quiet : true}
dotenv.config({ quiet: true });
import express from "express";
import authRoutes from "./src/routes/user-routes.js";
import { connectDB } from "./src/config/database.js";

const app = express();
connectDB();

const PORT = process.env.PORT || 9000;
app.use(express.json());

app.use("/api/v1", authRoutes);

//? way to access env variable, we cannot directly access env variable, for that we have to use dotenv package.
console.log("PORT is", process.env.PORT);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Unable to start server", err);
  }

  console.log("Server started at ", PORT);
});
