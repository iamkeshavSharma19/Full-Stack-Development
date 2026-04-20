import mongodb from "mongodb";

async function connectDB() {
  //&Step1 === CREATE A CONNECTION.
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  //&Step2 === CREATE A DATABASE.
  //~database here is an object.
  let database = client.db("nodeClass02");
  //&Step3 === CREATE A COLLECTION
  //~collection here is also an object which will have multiple methods for performing CRUD operations.
  let collection = await database.createCollection("users");

  //?Create Single User
  //   await collection.insertOne({ name: "Rahul", age: 25 });
  //   console.log("user created");

  //&Creating multiple users
  //   await collection.insertMany([
  //     { name: "Brock Lesnar", age: 55 },
  //     { name: "John Cena", age: 50 },
  //   ]);
  //   console.log("Brock Lesnar And John Cena Retired from WWE");

  //~Getting SINGLE USER === findOne({filterCondition})
  //   let user = await collection.findOne({ name: "Brock Lesnar" });
  //   console.log(user);

  //^GET MULTIPLE USERS === find({}) ==> returns a cursor object
  //   let users = await collection.find({}).toArray();
  //   console.log(users);

  //?UPDATE SINGLE USER === updateOne({filter}, {updatedValue})
  //   let result = await collection.updateOne(
  //     { name: "Rahul" },
  //     { $set: { name: "Roman Reigns" } },
  //   );
  //   console.log(result);
  //   console.log("Rahul updated");

  //~DELETE USER === deleteOne({filter}) and deleteMany({}) ==> deleteMany will delete all the documents

  let res = await collection.deleteOne({ name: "John Cena" });
  console.log(res);
}

//&function call
connectDB();
