import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";
import { connectDB } from "./config/database.js";
import userRoutes from "./routes/user-routes.js";
import { cors } from "cors";

connectDB();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/api", userRoutes);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server started at port ${PORT}`);
});
