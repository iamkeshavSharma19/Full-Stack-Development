import mongoose from "mongoose";
import validator from "validator";

const empSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      minLength: 4,
      maxLength: 50,
      required: true,
    },
    emailId: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a Strong Password: " + value);
        }
      },
    },
    age: {
      min: 18,
      type: Number,
    },
    designation: {
      type: String,
      required: true,

      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

export const Emp = mongoose.model("Emp", empSchema);
