import dotenv from "dotenv";
dotenv.config({ quiet: true }); //~this method will read the contents from .env file and add it to process.env.
import express from "express";
import connectDB from "./config/database-config.js";
import feedbackRoutes from "./routes/feedback-routes.js";
import FeedbackModel from "./models/feedback-model.js";

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/api/feedback/v1", feedbackRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  else console.log("Server running at port", process.env.PORT);
});


