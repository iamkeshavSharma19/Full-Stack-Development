import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";
import { connectDB } from "./config/database.js";
import empRoutes from "./routes/employee-routes.js";

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use("/v1/api", empRoutes);

// app.get("/", (req, res) => {
//   console.log(process.env.PORT);
//   res.send("Hii");
// });

connectDB()
  .then(() => {
    console.log("Database connection established ✔️");

    app.listen(PORT, (err) => {
      if (err) console.log(err);
      console.log("Server started at PORT", PORT);
    });
  })
  .catch((err) => {
    console.log("Database connection cannot be established");
    process.exit();
  });
