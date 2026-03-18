import mongoose from "mongoose";

const connectDB = async () => {
  let client = await mongoose.connect(process.env.MONGODB_URL);
  console.log("Database connected to");
};

export default connectDB;
