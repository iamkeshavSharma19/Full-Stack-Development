//! Router
//! invoke
//! export

import { Router } from "express";
import {
  displayFormPage,
  displayHomePage,
  getAllUsers,
  submitForm,
} from "../controllers/controller.js";

const router = Router();

// http:/?localhost:9000/register

console.log(router);

//! display all end points
router.get("/", displayHomePage);

router.get("/get-form", displayFormPage);

router.post("/register", submitForm);

router.get("/all", getAllUsers);

export default router;
