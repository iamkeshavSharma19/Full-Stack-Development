import express from "express";
import {
  handleGetAllEmp,
  handleGetSingleEmp,
  handleAddEmp,
  handleUpdateEmp,
  handleDeleteEmp,
} from "../controllers/employee-controllers.js";

const router = express.Router();

router.get("/all-emp", handleGetAllEmp);

router.get("/emp/:id", handleGetSingleEmp);

router.post("/add-emp", handleAddEmp);

router.put("/update-emp/:id", handleUpdateEmp);

router.delete("/delete-emp/:id", handleDeleteEmp);

// console.log(router);

export default router;
