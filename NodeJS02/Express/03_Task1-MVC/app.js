import express from "express";
import routes from "./router/routes.js";

//console.log(routes);

const app = express();
const PORT = 9002;

//&MongoDB Connection

//&Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//&Routes === we will create a separate folder for our routes..
//~We will use Routes middleware
app.use("/v1/api", routes);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server started at PORT", PORT);
});
