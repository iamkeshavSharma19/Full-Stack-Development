import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected ✔️");
  } catch (error) {
    console.log("Database connection failed");
    //&by using process.exit() our whole connection will be disconnected,if due to some reasons our connection gets lost that's why we use process.exit.
    process.exit();
  }
}

//~if we make changes in the .env folder then we need to restart the nodemon as well.

