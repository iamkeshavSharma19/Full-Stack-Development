//! Router
//! invoke
//! export

import { Router } from "express";
import {
  displayFormPage,
  displayHomePage,
  submitForm,
} from "../controllers/controller.js";

const router = Router();

console.log(router);

//! display all end points
router.get("/", displayHomePage);

router.get("/get-form", displayFormPage);

router.post("/register", submitForm);

export default router;
