import dotenv from "dotenv";
//~ We used quiet: true so that it does'not === injected env (1) from .env come in terminal
dotenv.config({ quiet: true });
import express from "express"; //&alt btn + down arrow
import { connectDB } from "./config/database.js";
import bookRoutes from "./routes/book-routes.js";

const app = express();
const PORT = process.env.PORT || 9000;

//!Database CONNECTION
connectDB();

//!MIDDLEWARES
app.use(express.json());
app.use("/v1/api", bookRoutes);

//!ROUTES

// app.get("/", (req, res) => {
//   //&way to access the env variable
//   console.log(process.env.PORT); //~undefined because we have not used dotenv package,for accessing env package we have to use dotenv package.
//   res.send("Hii");
// });

app.listen(PORT, (err) => {
  console.log("Server started at PORT", PORT);
});
