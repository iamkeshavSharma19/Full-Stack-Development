import express from "express";
import { connectDB } from "./src/config/db.js";
//?we can import default routes with any name however we cannot do the same with the named import.
import bookRoutes from "./src/routes/book-routes.js";

const app = express();

const PORT = 9000;

//? database connection
connectDB();

app.use(express.json());
//!routes
//app.use(bookRoutes); // http://localhost:9000/all-books
//!versioning the API's
app.use("/api/v1", bookRoutes); //http://localhost:9000/api/v1/all-books

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`App is listening on the PORT, ${PORT}`);
});
