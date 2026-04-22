import express from "express";
import {
  getHTMLPage,
  handleFormSubmit,
  handleGetAllUsers,
} from "../controllers/controller.js";

// console.log("Hii");

const router = express.Router();

router.get("/", getHTMLPage);

router.post("/submit", handleFormSubmit);

router.get("/all", handleGetAllUsers);

export default router;
