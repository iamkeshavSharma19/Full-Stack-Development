import mongodb from "mongodb";

async function connectDB() {
  //&Step1 === CREATE A CONNECTION.
  //~MongoClient is a class,inside this class there is a method called connect,inside this method we basically have to pass.it returns us a reference in form of promise.
  const client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  //&Step2 === CREATE A DATABASE.
  //?it also returns us a refernce of the database
  const database = client.db("App1");
  //&Step3 === CREATE A COLLECTION.
  const collection = await database.createCollection("users");

  console.log("Database connection established ✔️");

  //^CREATE A SINGLE USER === insertOne()
  //   collection.insertOne({
  //     fname: "John",
  //     lname: "Doe",
  //     age: 20,
  //   });
  //   console.log("USER CREATED");
  //^CREATE A SINGLE USER === insertMany()
  //   collection.insertMany([
  //     { fname: "Jane", lname: "Doe", age: 25 },
  //     { fname: "Brock", lname: "Lesnar", age: 55 },
  //   ]);
  //   console.log("CREATED MULTIPLE USERS");
  //*GET SINGLE USER === findOne({filterCondition})
  //   let user = await collection.findOne({
  //     fname: "John",
  //   });
  //   console.log(user);
  //?GET ALL USERS === findMany({}) === returns us a cursor object,this object points to all the documents, so we write toArray()
  //   let users = await collection.find({}).toArray();
  //   console.log(users);
  //! UPDATE A USER === updateOne({filter}, {updatedValue})
  //   let result = await collection.updateOne(
  //     { fname: "John" },
  //     { $set: { age: 30 } },
  //   );
  //   console.log(result);
  //&DELETE A USER === deleteOne({filter})
  //   let resp = await collection.deleteOne({ fname: "Jane" });
  //   console.log(resp);

  //~DELETE ALL USERS === deleteMany({})
  let resp = await collection.deleteMany({});
  console.log(resp);
}

connectDB();
