import mongodb from "mongodb";

export async function connectDB() {
  try {
    let client = await mongodb.MongoClient.connect(
      "mongodb://localhost:27017/",
    );
    let database = client.db("Task1-MVC");
    let collection = await database.createCollection("users");
    return collection;
  } catch (error) {
    console.log("MongoDB connection failed 🟣", error);
  }
}
