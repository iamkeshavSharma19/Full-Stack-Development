//!before installing any third party modules/packages => we must have a package.json file in our project folder
//?this file should be unique

//?npm => it is a default package manager.

//?this contains meta data about the project and along with that it also store the dependencies.these are the packages which are required to run the project

//?npm init -y => create a json file with default values
//!npm init => for manually creating a json file and manually giving the inputs

//? npm i/install moduleName1
//? npm i/install moduleName1 moduleName2 mN1 mN2
//!npm i mongodb

//! when a module is installed, there will be 3 changes
//~1) inside package.json file (add)
//~2) node_modules => this will store all the modules and dependencies code which I have installed from npm.
//~3) package-lock.json

//? =================== Connecting MongoDB
//import mongodb from "mongodb";
// import { MongoClient } from "mongodb";

//! steps
//?1 create a connection
//?2 create a database
//?3 create a collection
//?4 insert/delete/update data
// import { MongoClient } from "mongodb";

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected Successfully");

    const mongoDatabase = client.db("myDatabase");

    // Collection reference lo
    const nodeItems = mongoDatabase.collection("nodeItems");

    let res = await nodeItems.insertOne({ name: "abc", age: 34 });

    //? findOne Method

    console.log("✅ Data Inserted:", res.insertedId);

    //! 26 Feb, 2026 ===========================================>>

    

    return mongoDatabase;
  } catch (error) {
    console.log("❌ Error:", error);
  } finally {
    await client.close();
  }
}

connectDB();
