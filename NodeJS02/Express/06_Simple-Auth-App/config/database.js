import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connection established Successfully ✔️");
  } catch (error) {
    console.log("MongoDB connection failed ❌");
    process.exit();
  }
}
