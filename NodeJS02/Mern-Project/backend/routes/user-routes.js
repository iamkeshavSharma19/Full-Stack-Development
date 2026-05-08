import { Router } from "express";
import * as userControllers from "../controllers/user-controller.js";
import { isAuthentication } from "../middlewares/auth-middleware.js";

const router = Router();

router.post("/register", userControllers.registerUser);
router.post("/verify", userControllers.verification);
router.post("/forgotPassword", userControllers.forgotPassword);
router.post("/login", userControllers.loginUser);
router.post("/verify-otp/:email", userControllers.verifyOtp);

export default router;
