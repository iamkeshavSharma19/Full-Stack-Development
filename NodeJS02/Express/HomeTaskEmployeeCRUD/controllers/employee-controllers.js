import { Emp } from "../models/emp-models.js";

async function handleAddEmp(req, res) {
  const emp = new Emp(req.body);
  try {
    await emp.save();
    res.status(201).json({
      success: true,
      message: "employee created",
      data: emp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleGetAllEmp(req, res) {
  try {
    let allEmp = await Emp.find({});
    if (allEmp.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No employee available",
      });
    }

    res.status(200).json({
      message: "All employees fetched",
      data: allEmp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleGetSingleEmp(req, res) {
  console.log(req.params.id);
  try {
    const empId = req.params.id;
    let myEmp = await Emp.findById(empId);
    if (!myEmp) {
      return res.status(404).json({
        success: false,
        message: "Employee Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Employee found",
      data: myEmp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleUpdateEmp(req, res) {
  try {
    console.log(req.body);
    console.log(req.params.id);
    const empId = req.params.id;
    const body = req.body;
    const updatedEmp = await Emp.findByIdAndUpdate(empId, body, { new: true });
    if (!updatedEmp) {
      return res.status(404).json({
        success: false,
        message: "Employee Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "employee updated successfully",
      data: updatedEmp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleDeleteEmp(req, res) {
  try {
    const empId = req.params.id;
    const deletedEmp = await Book.findByIdAndDelete(bookId);
    if (!deletedEmp) {
      return res.status({
        success: false,
        message: "Employee not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Empployee deleted successfully",
      data: deletedEmp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export {
  handleAddEmp,
  handleGetAllEmp,
  handleGetSingleEmp,
  handleUpdateEmp,
  handleDeleteEmp,
};
