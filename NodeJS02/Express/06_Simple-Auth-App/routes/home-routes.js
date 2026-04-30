import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = Router();

//&only logged in users will be available to access the home route.we basically have to protect this route.
router.get("/home", authMiddleware, (req, res) => {
  console.log("hello");
  console.log(req.header);
  let { username } = req.userInfo;
  res.status(200).json({
    success: true,
    message: "welcome to home page",
    user: username,
  });
});

export default router;

/* 

res.status(200).json({
    success: true,
    message: "Welcome to home page",
  });


**/
