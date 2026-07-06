import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB database Connected");
  } catch (error) {
    console.log("Mongodb Connection failed");
    console.log(error);
  }
}
