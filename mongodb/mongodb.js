// No SQL

// sample data -> name, age, id

// if i want to insert the data in sql dbs
// 1. database (dbName)
// 2. table (tableName) -> name (varchar) age(int) id(int)
// e1 => varun, 34, 123
// e2 => ashwin, null, 123
// e3 => sri, 23, 123, sri@gmail.com (not possible)
// because the schema is predefined

// SQL dbs are used when the relation between data is the first priority

// if i want to insert the data in nosql
// ? 1) databse(dbName)
// ? 2) something which is equivalent to table (name) -> optional => collection.
// ? 3) insert data
// ! e1 => name -> varun, age -> 34, id -> 123
// ! e2 => name -> Ashwin, id -> 123
// !e3 => sri, 23, 123, sri@gmail.com, 899088913, sal, ......

// ! because the schema is dynamic

// ? 1.document based => in this data is inserted in form of javascript like objects (bson)
let user1 = {
  name: "varun",
  age: 34,
  email: "v@gmail.com",
  skills: ["html, css"],
};

// ? 2.key value pair -> key value pair database is used in rate - Limiting (ip address), caching (storing the data somewhere from which accessing the data is faster) (they are in memory databases example -> redis)

// ? key value pair => in this data is stored in form of key-value pair and each key-value pair is a separate entity

// ? 3.graph database -> data is stored in the form of nodes, where all the nodes are connected with the help of edges (example => neo4) (used in social media applicaitons like linkedin, instagram)

// ? 4. wide column database / columnar database -> data is getting stored in the form of rows and columns (example -> cassandraDB) (used for ai model training) (used in data analytics)

// * difference between sql and nosql databases

// ! sql
// ? 1) it is static in nature, here structure is predefined
// ? 2) also known as RDBMS
// ? 3) here data is stored in the form of tables (rows and cols)
// ? 4) it is used when the relation b/w data is first priority
// ? 5) using sql dbs, writing complex queries is easy
// ? 6) it supports vertical scaling

// ! no-sql
// ? 1) it is dynamic in nature, here structure is not  predefined (by  default the structure is not defined)
// ? 2) Also known as nonRDBMS
// ?3) here data is stored in form of documents, key-value pairs, graphs, wide columns
// ?4) it is used when the priority is storing / handling large amount of data.
// ?5) writing complex queries is hard.
// ?6) it supports horizontal scaling.
// ?7) examples -> mongodb, cassendradb, neo4j, redisDB.

// ! scaling -> it is a process of altering the specs (RAM, Disk) of the system

let myLaptop = {
  RAM: 8,
  Disk: 512,
};

// ? movies, series, games, etc... (left RAM-512mb, disk-16gb)

// ! 1) delete existing applications and data (this is not allowed)

// ! 2) increase the space (vertical scaling): in this new resources are added to the existing system
let myLaptopUpgraded = {
  RAM: 16,
  Disk: 1024,
};

// !3) buy a new laptop (horizontal scaling) => in this, new resources are added within the existing system

let myNewLaptop = {
  RAM: 8,
  Disk: 1024,
};

// ! highly available and distributed.

// !60k ---> 60k (16, 1024)
// !60k ---> 30k (8, 512)   30k (8, 512)
// ? In case of No SQL Databases, we can basically divide our database

// ? so nosql database is highly available and distributed

// ! =================================== MONGODB ========================
// ? 25 days (basics(compass, mongod server, mongosh), CRUD(commands), operators, aggragation, indexing)

// ! !theory -> (replication, sharding) // System design

// ! mongodb -> it is nosql database which stores data in JSON like format (BSON). It is dynamic in nature (by default there is no schema). It is open source, cross platform.

// ! 1) mongo server / community server

// ! 2) compass

// !3) mongoshell

// ? in laptop we have more than 60,000 ports.

// ? 1) Mongodb compass => it is a graphical user interface, i can create everything visually and manually, there is no need to remember the mongodb commands. Through compass we can interact with the database visually without writing any commands (or knowledge of mongodb commands)

// ? while adding documents using compass, pass the input in JSON Format

// ? 2) mongo shell => CLI (command line interface) (terminal) (through which we can interact (CRUD) with database by typing mongodb commands. It is built using javascript.)

// ! to tap into the shell, open terminal and type "mongosh".
// ! to exit the shell => ctrl + c + c or .exit
// ! net stop mongodb.
// ! net start mongodb.

// ? 3) community (mongodb server) => it is a mongodb server through which we can interact with database, by default it's port number is 27107, complete address will be

// ! mongodb://localhost:27017/ => domain name
// ! mongodb://127.0.0.1:27017/ => Ip Address

// ! ================================ mongodb shell commands

// ? to display all the databases
// ? show dbs or show databases to show all the databases

// ? the default database name is test

// ! 2) to create a database
// ? use database_name

// !3) to create a collection
// ? db.createCollection("collection_name")
// example => db.createCollection("professor")

// ? datatype of dbs => object

// ? new database => temporary it gets stored in the storage engine

// ? 4. to show all the collections => show collections === show tables

// ! show tables => this was introduced to make developers familiar with the command show collections

// ?5) to raname a collection => db.renameCollection("old_name", "new_name")

let db = {
  name: "college",
  createCollection: function () {},
  revoke: function () {},
  professors: {
    // ! professors here is an collection
    renameCollection: function () {},
    drop: function () {},
    document: {},
  },
};

// ? db.professor.renameCollection("newName");

// ? 6) to delete a collection

// ? db.collection_name.drop()
// ? ex => db.professor.drop()

// ! 7) deleting a database

// ? db.dropDatabase()

// ! ============================== CRUD on documents

// ? 8) to insert a single document -> {} (insertOne({}))

// -> js objects, json data

// ! database >> collection >> documents

db.books.insertOne({
  name: "the alchemist",
  author: "Harry potter",
  genre: "novel",
});

// ? {
//  ?  acknowledged: true,
//   ?insertedId: ObjectId('696a02cd194bf20a520d8190')
//  ?}

db.books.insertOne({
  name: "the alchemist",
  author: "Harry potter",
  genre: "novel",
  publishDate: "new Date()",
  publisher: "undefined",
});

db.books.insertOne({
  name: "the alchemist",
  author: "Harry potter",
  genre: "novel",
  publishDate: new Date(),
  publisher: undefined,
});

// ! BSON --> bson stands for binary json (binary javascript object notation)

// ? 1) in this data is stored in binary format.
// ? 2) MongoDB uses bson to store data (conversion done by mongo-shell)
// ? 3) it is not human readable
// ? 4) bson supports various other datatypes like date, functions, undefined and along with that other data types like objectId.

// ! geoJSON => for using the co-ordinates in the mongoDB

// ! objectId => It is a 12 bytes hexadecimal string of type objectId.

// ? 1) it is unique for each document.
// ? 2) whenever a new document is inserted, mongoDb automatically assigns an _id to that document, unless we explictly assigns _id to that document
// ? 3) also acts as a unique id

db.books.insertOne({
  name: "the child",
  _id: "12345",
});

db.books.insertOne({
  name: "the child",
  _id: 12345,
});

// ! this _id is divided into three parts (4, 5, 3)

// ? date.now() => jan 1970 => epoch => time stamp
// ? 1) first 4 bytes ----> time stamps
// ? 2) next 5 bytes ----> PUI (Process unique identifier) (2)processId + machineId(3)
// ? 3) last 3 bytes ----> counter, starts at random value and increments by 1 for each document inserted
// ? 4) this is immutable.
// ? _id is immutable

// ! --------------------------- 19 Jan, 2026 --------------------------------------

// ? Inserting the multiple documents => (insertMany([]))
// ?db.collection_name.insertMany([{doc1}, {doc2}, {doc3}, ..])

db.books.insertMany([
  { name: "the killling", author: "JK Rowling" },
  { name: "Atomic Habits", author: "James Clear" },
]);

// ? to fetch/read single document -> findOne(), we will paas 3 arguments in it.
db.collection_name.findOne({ filterCondition }, { projection }, { options });

// ! All the argumets are not mandatory.

// ? 1) { filterCondition } => here we pass the condition on which we need to filter out the documents.

// ! display the details of user whose name is "Smith"
db.collection_name.findOne({ name: "Smith" });

db.books.findOne({ name: "the alchemist" });

// ! when no conditions are passed the first document is fetched

db.sampleData.insertMany([
  {
    name: "Ashwin",
    age: 34,
    sal: 34000,
    gender: "m",
  },
  {
    name: "Ashwini",
    age: 33,
    sal: 44000,
    gender: "f",
  },
  {
    name: "Sri",
    age: 31,
    sal: 30000,
    gender: "m",
  },
  {
    name: "Sirisha",
    age: 35,
    sal: 39000,
    gender: "f",
  },
]);

db.sampleData.findOne({ name: "Ashwini" });
db.sampleData.findOne({ gender: "f" });

// ? 2) {projection} => using projection, we can display/hide fields in the output, while using projection, _id will displayed by default

// ! if i have to show name only.
// ! and hide the _id, we use _id : 0
db.sampleData.findOne({ gender: "f" }, { name: 1, _id: 0 });

// ? to fetch / read multiple documents -> find(): it returns me the array of documents which will be matched

db.collection_name.find();

// ! display the names and sal of all the male employees
db.sampleData.find({ gender: "m" }, { name: 1, sal: 1 });

// ! it returns me the array of all documents present in that collection
db.sampleData.find();
db.sampleData.find({});

// ! ================= Note ========= find() method returns a cursor (pointer) -> object

// ? Deleting the document (you can't roll back, once deleted, it's deleted)

// ? to delete a single document -> deleteOne(): this will delete the first matched document

db.collection_name.deleteOne({ filterCondition });

db.collection_name.deleteOne({}); // ? when no conditions are passed, the first document is deleted

db.collection_name.deleteOne(); // ! this will give you an error => arguments required.

db.sampleData.deleteOne({ gender: "m" }); // ? it will basically delete the first matched document

// ! to delete multiple documents => deleteMany(): this will delete all the matched documents.

db.collection_name.deleteMany({ filterCondition });

db.collection_name.deleteMany({}); // ? all the documents will be deleted from the collection

// ! 9) to update a single document -> updateOne(): this will update the first matched document

// ? db.collection_name.updateOne({filter}, {updation value}, {options})

db.collection_name.updateOne({}, { updationValue }, { options }); // ? first document in the collection would be updated

// ! ======================= operators =================================

// ? All operators in mongoDb starts with $ symbol

// ! OPERATORS -> these are the reserved symbols which are used to perform the operations

// ! 2 + 3 -> + = operator, 2, 3 => operands

// ! 1) comparison operators
// ? less than ============ $lt
// ? less than or equal to ======================== $lte
// ? greater than or equal to ======================$gte
// ? greater than ===================== $gt
// ? equals to ==================== $eq
// ? not equals to ================= $ne
// ! syntax for above 6 operators are same
// ! filter object ====> { fieldName: {$op: value}}

// ! Q => get the details of all the employees whose age is less than 32

db.sampleData.find({ age: { $lt: 32 } });

db.sampleData.find({ name: { $eq: "Sri" } });

// ? in ============================= $in
// ? not in =================================== $nin

// ! ================================ 20 Jan, 2026 =========================================

// ? download the json file provided in group

// ! mongo tools => for writing the queries in the form of commands

// ! mongoimport "path of json file to import" -d databaseName -c collectionName --jsonArray => for importing the json data not visually,but by using the commandLine.

// ! Chrome => mongo tools download.

// ! Q display all the employee names having salary more than 2000

// ? db.emp.find({{sal: $gt: 2000}}, {empName: 1, _id: 0, sal: 1})

// ! Q => display all the emp names who are working in department 10 and department

// ! $in
// ? filter object ====> {fieldName: {$in/nin: ["v1", "v2", "v3", ......]}}
// ? $in will fetch all the documents, which will match any one of the given values v1, v2...

// ? $nin will fetch all the documents, which fails to fulfill any one of the given values v1, v2...

db.emp.find(
  {
    deptNo: { $in: [10, 20] },
  },
  {
    // show the deptNo.
    deptNo: 1,
    // do'not show the id
    _id: 0,
  },
);

// ! $nin
db.emp.find(
  {
    // 10, 20 ko chod ke sab print ho jayega!!
    deptNo: { $nin: [10, 20] },
  },
  {
    // show the deptNo.
    deptNo: 1,
    // do'not show the id
    _id: 0,
  },
);

// ! explicit and implicit

db.sampleData.deleteOne({ gender: "m" }); // implicit use of $eq
db.sampleData.deleteOne({ gender: { $eq: "m" } }); // explicit use of $eq

// ! two ways for creating a collection

db.createCollection();
db.collection_name.insertMany();

// ? Both will work perfectly fine..

// ! display all the emp details who are working as clerk in department 10

// ? Case 1 when we apply multiple conditions on different fields => all the conditions are getting fulfilled , so I can say it is working like logical and.

db.emp.find(
  {
    // ? first condition
    job: "clerk",
    // ? second condition
    deptNo: 10,
  },
  {
    job: 1,
    deptNo: 1,
    _id: 0,
  },
);

// ! display all the emp details who are having sal in between  1000 and 2000
// ? Case 2 => when we apply multiple conditions on same field => only the last condition will work
db.emp.find(
  {
    // ? first condition
    sal: { $gt: 1000 },
    // ? second condition
    sal: { $lt: 2000 },
  },
  {
    sal: 1,
  },
);

// job: clerk will be override by the job: manager
db.emp.find({
  job: "clerk",
  depNo: 20,
  job: "manager",
});

// ! Logical Operators (logical AND, Logical OR etc ...)

// !  these 3 have same syntax
// ? and ==========================> $and
// ? or ===========================> $or
// ? nor ==========================> $nor
// ? filter object ===>
// ? { $and : [{c1}, {c2}, {c3}, ....]}

// ! ------------------------------ ! --------------------
// ! Logical and => this will fetch all the documents, which fulfills all the given conditions

// ! display
db.emp.find(
  {
    $and: [
      // ! condition 1
      { job: "clerk" },
      // ! condition 2
      { deptNo: { $eq: 10 } },
    ],
  },
  {
    job: 1,
    deptNo: 1,
  },
);

// ? not ===========================> $not

// ! display all the emp names who are not working in dept 10
db.emp.find({ deptNo: { $ne: 10 } }, { deptNo: 1 });
db.emp.find({ deptNo: { $not: 10 } }, { deptNo: 1 });
// ! logical not => This will invert the expression that is being passed

// ? find the user with id
// ! 66a23517b5c6990483c4e49b
db.emp.findOne({ _id: ObjectId("66a23517b5c6990483c4e49b") });

// ! we have to specify that _id is type of ObjectId, otherwise it will be considered as a string

db.emp.insertOne({
  _id: 1234,
  name: "abc",
  age: 34,
  sal: 3499,
});

db.emp.findOne({ _id: ObjectId("1234") }); // ! Error => BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer

db.emp.findOne({ _id: 1234 }); // ! No error

// ! display all the emp who were hired after 1981
("1 Jan 2003");

// ? Always store the date in the ISO Date Format => yyyy-MM-DD T HH:MM:SS:ssZ

// ! yyyy -> year
// ! MM -> month
// ! DD -> date
// ? T -> separator
// ! HH -> hours
// ! MM -> minutes
// ! SS -> seconds
// !ss -> ms
// ! z -> offset value ist => india is ahead 5:30 hours

db.emp.find({ hireDate: { $gt: ISODate("YYYY-MM-DD") } });
db.emp.find({ hireDate: { $gt: ISODate("1981-12-31") } }, { hireDate: 1 });

// ? display all the employee names who are having their performance rating greater than 3.8

db.emp.find(
  { "performance.rating": { $gt: 3.8 } },
  { empName: 1, "performance.rating": 1 },
);

// ! while using nested object properties, use double quotes to avoid error

// ! Display all the emp details who are having react as one of their skills

db.emp.find({ skills: "react" }, { skills: 1, _id: 0 });

// ! Display all the emp details who are having react and sql as one of their skills

db.emp.find({ skills: ["html", "sales"] }, { skills: 1, _id: 0 });
// ! not working
// ! use array operators

// ! ============================ array op ===================
// ! all ====================== $all
// ! size ========================= $size
// ! element match ======================= $elemMatch

// ? syntax for $all =>
// ! filter part ==>
// ? {fieldName: $all: ['v1', 'v2']};
db.emp.find({ skills: { $all: ["html", "php"] } }, { skills: 1 });
// ! This will fetch all the documents which will fulfill all the given values

db.emp.find({ skills: { $in: ["html", "php"] } }, { skills: 1 });

// ! $in can be used anywhere, but $all will be used only on arrays

// ? syntax for $size =>
// ! filter part ==>
// ? {fieldName: $size: INTEGER VALUE};

// ! display all the emp who are having only 2 skills
// ? this will fetch the documents based on the size of the skills array
db.emp.find({ skills: { $size: 2 } }, { skills: 1 });

// ! Literals array
let array = ["1", "abc"];

// ! ------- 22 Jan, 2025 -------------------
// ! Students who have scored above 90 in sem 1

// ? use $elemMatch => nesting objects or array

db.students.find({ courses: { $elemMatch: { condition } } });

db.students.find(
  {
    courses: {
      $elemMatch: { marks: { $gt: 90 }, subject: "Math", semester: 1 },
    },
  },
  {
    name: 1,
    _id: 0,
  },
);

// ! students who have failed (marks < 50) in any exam in semester 1

db.students.find({
  courses: {
    $elemMatch: {
      marks: { $lt: 50 }, // ? first condition.
      semester: 1,
    },
  }, // ? second condition.
});

// ! students with scholarship above 40,000 in 2024
db.students.find({
  scholarships: { $elemMatch: { amount: { $gt: 40000 }, year: 2024 } },
});

// ! $elemMatch => it is used to filter out the documents based on some conditions, when the array contains objects/documents in it.

// ? element operators (exists, type, etc...)
// ! exists ==================================> $exists
// ! type ========================================> $type => checks type of your fieldName

// ? syntax for $exists
// ! filter part
// ! { fieldName: {$exists: boolean}}

// ! check weather that key-value pair is present in you students document or not
db.emp.find({ email: { $exists: true } });

db.emp.find({ email: { $exists: false } });

// ! display all the names of the employees who are getting the bonus

db.emp.find({ bonus: { $exists: true } }, { empName: 1, _id: 0 });

// ! $type
// ? Syntax
// ! filter part
// ! { fieldName: {$type: datatype}}
db.emp.find({ sal: { $type: "number" } });

// ? evaluation operators
// ! regex => regular expressions ==> used for pattern matching ( string ) and it only works on the string data

// ? ("anc@gmail.com")

// ? Syntax for regex
// ! filter part
// ! { fieldName : {$regex: /pattern/}}

// ! First way -> we are applying regex anywhere in the name
// ! Display all the emp details who are having letter a in their name

db.emp.find({ empName: { $regex: /a/ } }, { empName: 1, _id: 0 });
db.emp.find({ empName: { $regex: /ar/ } }, { empName: 1, _id: 0 });
db.emp.find({ empName: { $regex: /ada/ } }, { empName: 1, _id: 0 });

// ? second way => we are applying regex at start (^)
// ? ^ cap symbol will start the pattern matching from the beginning of the string
// ! display all the emp details who are having first letter as "a" in their name

db.emp.find({ empName: { $regex: /^a/ } }, { empName: 1, _id: 0 });

// ! display all the emp details who are having first letter as "al" as their first two letters
db.emp.find({ empName: { $regex: /^al/ } }, { empName: 1, _id: 0 });

// ! third way => apply regex at the last
// ! display all the emp details who are having letter "s" as their last character

// ! for that use $ symbol => it will start pattern matching from end of string
db.emp.find({ empName: { $regex: /s$/ } }, { empName: 1, _id: 0 });

// ! display all the emp details who are having letter "s" as their second last character.
// ? symbol for skipping the characters => .(dot symbol)
// ? for skipping the characters use dot symbol.
// ? one dot will represent one character.
db.emp.find({ empName: { $regex: /e.$/ } }, { empName: 1, _id: 0 });

// ! display all the emp details who are having letter "a" as their second character.
db.emp.find({ empName: { $regex: /^.a/ } }, { empName: 1, _id: 0 });

// ! display all the emp details who are having exactly 4 letters as their name
db.emp.find({ empName: { $regex: /^....$/ } }, { empName: 1, _id: 0 });

// ! --------- 28th Jan, 2026 --------------------------------->
// ? Arithmetic update operators
// ? $max, $min, $inc
// ! Syntax for $max and $min
// ? Updation part
// ! $max will only update the value when the past value is strictly greater than the saved data.

// ! $min will only update the value when the past value is strictly smaller than the saved data.
db.scores.insertMany([
  {
    name: "Varun",
    maxScore: 100,
    minScore: 50,
  },
  {
    name: "Ashwin",
    maxScore: 100,
    minScore: 50,
  },
]);

// !db.scores.updateOne({name: "Varun", {$max: {maxScore: 300}}});

// ? In case the field name is not present, then the new key-value pair will be added

// ! Syntax for $in
// ? It is used to increment / decrement the data by specefic values.
// ! Updatiion part
// ! {$inc: {fieldName: +/- INTEGER NUMBER}}

// ?

db.scores.updateOne({ name: "Varun" }, { $inc: { maxScore: -1 } });

// ! with $inc you basically cannot pass null, it is an exception.
db.scores.updateOne({ name: "Varun" }, { $inc: { age: -1 } });

// ! Array Update Operators
// ? push => this will add element at the last
// ! Syntax => { $push:{fieldName: "value"}}

db.emp.updateOne({}, { $push: { skills: "html" } });

db.emp.updateOne({}, { $push: { skills: ["html", "CSS"] } });

// ! $push + $each ==> Using these we can add multiple values to the array

// ? syntax --> {$push: {fieldName: {$each: [v1, v2, v3]}}}

// ! in this no nested array will be created
db.emp.updateOne(
  { empName: "ward" },
  { $push: { skills: { $each: ["node", "mongodb"] } } },
);

// ! modifiers => $position, $sort, $slice

db.emp.updateOne(
  { empName: "scott" },
  { $push: { skills: { $each: ["ai/ml"], $position: 1 } } },
);

db.emp.updateOne(
  { empName: "scott" },
  { $push: { skills: { $each: ["gen_ai"], $position: 3, $sort: 1 } } },
);

// ? $sort: 1 for ascending and $sort: -1 for descending....

// ! if the fieldName is not present then a new key-value pair would be created, it's type would always be array
db.emp.updateOne({}, { $push: { hobbies: "singing" } });

// ? $pop will remove an element from array either from first or last

// ! syntax => {$pop: {fieldName: 1 / -1}}

// ? 1 => delete from end
// ? -1 =>  delete from front
db.emp.updateOne({}, { $pop: { skills: 1 } });

// ! addToSet => This will make sure that array will not store any duplicate values , using $addToSet use to add unique values inside an array.

// ! it has the same syntax as we have seen above.

// ? {$addToSet: {fieldName: value}}

// ! we cannot use $position, $sort, $slice with addToSet !!!

// ? $pull and $pullAll

// ? $pullAll => this will remove all the occurences of values present in the array i.e v1, v2, v3 ........,  it matches with the values. i can't pass any condition to $pullAll

// ! updation part => {$pullAll: {fieldName: [v1, v2...]}}

db.emp.updateOne({}, { skills: ["react", "sql"] });

// ? $pull
// ! syntax -> updation parrt

// ? {$pull: {field: {expression}}}

db.emp.updateOne({}, { $pull: { $regex: { skills: /e/ } } });

// ! diff b/w $pull and $pullAll is that using $pull we can use the conditions....

// ! $pullAll will accept only array

// ! ============================= 29 January =====================>
db.users.insertMany([
  {
    name: "Rajesh Kumar",
    age: 32,
    currentCompany: "Amazon",
    totalExperience: 10,
    experience: [
      {
        company: "TCS",
        duration: 24,
        role: "Developer",
        salary: 400000,
        rating: 3.5,
      },
      {
        company: "Infosys",
        duration: 36,
        role: "Senior Developer",
        salary: 800000,
        rating: 4.2,
      },
      {
        company: "Amazon",
        duration: 18,
        role: "Tech Lead",
        salary: 2500000,
        rating: 4.8,
      },
    ],
  },
  {
    name: "Priya Sharma",
    age: 28,
    currentCompany: "Google",
    totalExperience: 6,
    experience: [
      {
        company: "Wipro",
        duration: 18,
        role: "Developer",
        salary: 450000,
        rating: 3.8,
      },
      {
        company: "Microsoft",
        duration: 24,
        role: "SDE-2",
        salary: 1800000,
        rating: 4.5,
      },
      {
        company: "Google",
        duration: 12,
        role: "Senior Engineer",
        salary: 3200000,
        rating: 4.9,
      },
    ],
  },
  {
    name: "Amit Verma",
    age: 35,
    currentCompany: "Flipkart",
    totalExperience: 12,
    experience: [
      {
        company: "Accenture",
        duration: 30,
        role: "Analyst",
        salary: 350000,
        rating: 3.2,
      },
      {
        company: "Capgemini",
        duration: 36,
        role: "Consultant",
        salary: 700000,
        rating: 3.9,
      },
      {
        company: "Flipkart",
        duration: 18,
        role: "Product Manager",
        salary: 2200000,
        rating: 4.6,
      },
    ],
  },
  {
    name: "Sneha Reddy",
    age: 30,
    currentCompany: "Microsoft",
    totalExperience: 8,
    experience: [
      {
        company: "TCS",
        duration: 24,
        role: "Developer",
        salary: 420000,
        rating: 3.6,
      },
      {
        company: "Amazon",
        duration: 30,
        role: "SDE-2",
        salary: 1600000,
        rating: 4.4,
      },
      {
        company: "Microsoft",
        duration: 12,
        role: "Senior SDE",
        salary: 2800000,
        rating: 4.7,
      },
    ],
  },
  {
    name: "Vikram Singh",
    age: 26,
    currentCompany: "Infosys",
    totalExperience: 4,
    experience: [
      {
        company: "Cognizant",
        duration: 18,
        role: "Junior Developer",
        salary: 380000,
        rating: 3.4,
      },
      {
        company: "Infosys",
        duration: 24,
        role: "Developer",
        salary: 650000,
        rating: 4.0,
      },
    ],
  },
  {
    name: "Ananya Iyer",
    age: 33,
    currentCompany: "Netflix",
    totalExperience: 11,
    experience: [
      {
        company: "Wipro",
        duration: 24,
        role: "Developer",
        salary: 400000,
        rating: 3.5,
      },
      {
        company: "Adobe",
        duration: 36,
        role: "Senior Developer",
        salary: 1500000,
        rating: 4.3,
      },
      {
        company: "Netflix",
        duration: 18,
        role: "Staff Engineer",
        salary: 4000000,
        rating: 4.9,
      },
    ],
  },
  {
    name: "Rohit Malhotra",
    age: 29,
    currentCompany: "Paytm",
    totalExperience: 7,
    experience: [
      {
        company: "HCL",
        duration: 20,
        role: "Developer",
        salary: 360000,
        rating: 3.3,
      },
      {
        company: "Swiggy",
        duration: 28,
        role: "Backend Developer",
        salary: 1100000,
        rating: 4.1,
      },
      {
        company: "Paytm",
        duration: 14,
        role: "Senior Developer",
        salary: 1800000,
        rating: 4.5,
      },
    ],
  },
  {
    name: "Kavya Nair",
    age: 31,
    currentCompany: "Uber",
    totalExperience: 9,
    experience: [
      {
        company: "Infosys",
        duration: 30,
        role: "Developer",
        salary: 500000,
        rating: 3.7,
      },
      {
        company: "Ola",
        duration: 24,
        role: "Senior Developer",
        salary: 1300000,
        rating: 4.2,
      },
      {
        company: "Uber",
        duration: 18,
        role: "Tech Lead",
        salary: 3500000,
        rating: 4.8,
      },
    ],
  },
  {
    name: "Arjun Kapoor",
    age: 27,
    currentCompany: "Zomato",
    totalExperience: 5,
    experience: [
      {
        company: "Tech Mahindra",
        duration: 18,
        role: "Junior Developer",
        salary: 340000,
        rating: 3.2,
      },
      {
        company: "Myntra",
        duration: 20,
        role: "Developer",
        salary: 900000,
        rating: 4.0,
      },
      {
        company: "Zomato",
        duration: 10,
        role: "SDE-2",
        salary: 1600000,
        rating: 4.4,
      },
    ],
  },
  {
    name: "Divya Menon",
    age: 34,
    currentCompany: "Oracle",
    totalExperience: 12,
    experience: [
      {
        company: "Accenture",
        duration: 36,
        role: "Analyst",
        salary: 380000,
        rating: 3.4,
      },
      {
        company: "SAP",
        duration: 30,
        role: "Consultant",
        salary: 1200000,
        rating: 4.1,
      },
      {
        company: "Oracle",
        duration: 24,
        role: "Senior Consultant",
        salary: 2000000,
        rating: 4.5,
      },
    ],
  },
  {
    name: "Karthik Bose",
    age: 28,
    currentCompany: "PhonePe",
    totalExperience: 6,
    experience: [
      {
        company: "Cognizant",
        duration: 24,
        role: "Developer",
        salary: 420000,
        rating: 3.6,
      },
      {
        company: "Razorpay",
        duration: 20,
        role: "Backend Engineer",
        salary: 1400000,
        rating: 4.3,
      },
      {
        company: "PhonePe",
        duration: 12,
        role: "Senior Engineer",
        salary: 2400000,
        rating: 4.7,
      },
    ],
  },
  {
    name: "Meera Joshi",
    age: 30,
    currentCompany: "Salesforce",
    totalExperience: 8,
    experience: [
      {
        company: "TCS",
        duration: 28,
        role: "Developer",
        salary: 410000,
        rating: 3.5,
      },
      {
        company: "Deloitte",
        duration: 26,
        role: "Consultant",
        salary: 1100000,
        rating: 4.2,
      },
      {
        company: "Salesforce",
        duration: 14,
        role: "Lead Developer",
        salary: 2600000,
        rating: 4.6,
      },
    ],
  },
  {
    name: "Siddharth Rao",
    age: 25,
    currentCompany: "Freshworks",
    totalExperience: 3,
    experience: [
      {
        company: "Wipro",
        duration: 15,
        role: "Junior Developer",
        salary: 350000,
        rating: 3.3,
      },
      {
        company: "Freshworks",
        duration: 18,
        role: "Developer",
        salary: 800000,
        rating: 4.1,
      },
    ],
  },
  {
    name: "Pooja Gupta",
    age: 32,
    currentCompany: "LinkedIn",
    totalExperience: 10,
    experience: [
      {
        company: "HCL",
        duration: 24,
        role: "Developer",
        salary: 390000,
        rating: 3.4,
      },
      {
        company: "Snapdeal",
        duration: 30,
        role: "Senior Developer",
        salary: 1000000,
        rating: 4.0,
      },
      {
        company: "LinkedIn",
        duration: 22,
        role: "Staff Engineer",
        salary: 3800000,
        rating: 4.8,
      },
    ],
  },
  {
    name: "Aditya Khanna",
    age: 29,
    currentCompany: "Adobe",
    totalExperience: 7,
    experience: [
      {
        company: "Infosys",
        duration: 26,
        role: "Developer",
        salary: 480000,
        rating: 3.7,
      },
      {
        company: "Intuit",
        duration: 22,
        role: "SDE-2",
        salary: 1700000,
        rating: 4.4,
      },
      {
        company: "Adobe",
        duration: 14,
        role: "Senior Engineer",
        salary: 2900000,
        rating: 4.7,
      },
    ],
  },
]);

db.users.find({ experience: { $elemMatch: { duration: { $gt: 30 } } } });

// ! 1) we can update the first matching element ({})
// ! 2) we can update all the elements [{}, {}, {}, ........]
// ! 3) we can update all the matching elements.

db.users.findOne({ name: "Rajesh Kumar" });

// ! 1) we can update the first matching element

// ? Q Add a bonus field to the experience history in which the duration is greater than 20

db.users.updateOne(
  { experience: { $elemMatch: { duration: { $gt: 20 } } } }, // filter
  // $ represents the first matching document
  { $set: { "experience.$.bonus": 200 } }, // updation
);

// ? removing the bonus field
db.users.updateOne(
  { experience: { $elemMatch: { duration: { $gt: 20 } } } }, // filter
  // $ represents the first matching document
  { $unset: { "experience.$.bonus": "" } }, // updation
);

// ? "experience.$" => this will point to the first matching experience object.

// ? "experience.$.duration" => this will point to the duration field of the first matching experience object.

// ! 2) we can update all the elements

db.users.updateOne(
  { experience: { $elemMatch: { duration: { $gt: 20 } } } }, // filter
  // $ represents the first matching document
  { $set: { "experience.$.[].bonus": 400 } }, // updation
);

// ! 3) we can update all the matching elements

db.users.updateOne(
  { experience: { $elemMatch: { duration: { $gt: 20 } } } }, // filter
  // $ represents the first matching document
  { $set: { "experience.$[e].bonus": 500 } }, // updation
  { arrayFilters: [{ "e.duration": { $gt: 20 } }] }, // options
);

// ! Add topCompany: true to all the exp entries where the company is either google amazon or microsoft

db.users.find({
  experience: {
    $elemMatch: { company: { $in: ["Amazon", "Google", "Microsoft"] } },
  },
});

db.users.updateMany(
  {
    experience: {
      $elemMatch: { company: { $in: ["Amazon", "Google", "Microsoft"] } },
    },
  },
  { $set: { "experience.$[e].topCompany": true } },
  {
    arrayFilters: [
      { "e.company": { $in: ["Amazon", "Google", "Microsofts"] } },
    ],
  },
);

// ! add midLevel: true, to all the experience history where salary is between 80,000 and 15,00,000

db.users.find(
  {
    experience: { $elemMatch: { salary: { $gt: 800000, $lt: 15000000 } } },
  },
  {
    $set: { "experience.$[e].midLevel": true },
  },
  {
    arrayFilters: [{ "e.salary": { $gt: 800000, $lt: 15000000 } }],
  },
);

// ? ============= CRUD Operations Completed =====================

// ! cursor
// ! data modelling

// ! data modelling => it defines how the data is stored, and what is the relationship between the data.

// ! how to define the relation between data -> 1) embedded (nested)

// ? 2) referenced

// & users
// ! embedded => demoralised data or nested data
let docs = {
  username: "abc",
  userAge: 45,
  userContactDetails: {},
  userAddressDetails: {},
};

// ! demoralised data
// ? advantage => 1.)single query can be used to fetch complete data.

// ! disadvantage -->
// ? 16 MB is the maximum size of a document in mongoDB.

// ? only 100 levels of nesting can be performed.

// ? sometimes we are over-fetching the data.

// ? update operations are slow .

db.moviesList.insertMany([
  {
    name: "mission impossible",
    genre: "action",
    actors: {
      actor1: "tom cruise",
      actor2: "simon peg",
    },
  },
  {
    name: "mission impossible",
    genre: "action",
    actors: {
      actor1: "tom cruise",
      actor2: "simon peg",
    },
  },
]);

// ? update operation is very slow in case nesting and demoralised data.

// ! reference
let u1 = {
  id: "u123",
  username: "abc",
  userAge: 45,
  // ! creating reference as contactDetails.
  contactDetails: "c123",
};

let u2 = {
  id: "u345",
  username: "def",
  userAge: 45,
  contactDetails: "c123",
};

// ! contact collection.
let c1 = {
  id: "c123",
  phone: "345565656565",
};

// ? examples

// ! product And Cart
// ! embedded => showing the example
let cart1 = {
  prod1: {
    name: "samsung phone",
    price: "50000",
    qty: 3,
    brand: "samsung",
  },

  prod2: {
    name: "laptop",
    price: "70000",
    qty: 1,
    brand: "asus",
  },

  prod3: {
    name: "mouse",
    price: "2000",
    qty: 2,
    brand: "asus",
  },

  prod4: {
    name: "TV",
    price: "80000",
    qty: 1,
    brand: "samsung",
  },
};

let cart2 = {
  prod1: {
    name: "keyboard",
    price: "10000",
    qty: 1,
    brand: "asus",
  },

  prod2: {
    name: "shoes",
    price: "5000",
    qty: 1,
    brand: "nike",
  },

  prod3: {
    name: "mouse",
    price: "2000",
    qty: 2,
    brand: "samsung",
  },

  prod4: {
    name: "bottle",
    price: "800",
    qty: 1,
    brand: "nike",
  },
};

// ? Products
// ! referenced
let c11 = {
  // ! only the reference of prod1 will come, not whole prod1
  prod1: { _id: "P123", qty: 3 },

  prod2: {
    name: "laptop",
    price: "70000",
    qty: 1,
    brand: "asus",
  },

  prod3: {
    name: "mouse",
    price: "2000",
    qty: 2,
    brand: "asus",
  },

  prod4: {
    name: "TV",
    price: "80000",
    qty: 1,
    brand: "samsung",
  },
};

let c22 = {
  prod1: {
    name: "keyboard",
    price: "10000",
    qty: 1,
    brand: "asus",
  },

  prod2: {
    name: "shoes",
    price: "5000",
    qty: 1,
    brand: "nike",
  },

  prod3: {
    name: "mouse",
    price: "2000",
    qty: 2,
    brand: "samsung",
  },

  prod4: {
    name: "bottle",
    price: "800",
    qty: 1,
    brand: "nike",
  },
};

// ! product coll.
let p1 = {
  _id: "P123",
  name: "phone",
  price: "50000",
  brand: "samsung",
};

let p2 = {
  _id: "P124",
  name: "phone",
  price: "50000",
  brand: "samsung",
};

// ? reference data is also known as normalised data.

//! In MongoDB, By default no structure is present.but we can create the structure for validating or checking the data..

// ! collection

db.createCollection("collection_name", { structure });

/*

let users
{
 name: string,
 age: string,
 isMarried: boolean
}


*/

// ! not used in projects.
db.createCollection("userColl", {
  validator: {
    // ? this will validate the incoming data
    $jsonSchema: {
      // ? defining the schema
      bsonType: "object", // ? input type of incoming data.
      required: ["name", "age", "require"],
      properties: {
        name: {
          bsonType: "string",
        },
        age: {
          bsonType: "int",
        },
        isMarried: {
          bsonType: "bool",
        },
      },
    },
  },
});

// ? mongoose..

// ! ======================== 3 Feb, 2026 =====================>

// ? ========================= AGGREGATION ==============
// ? DATA PROCESSING PIPELINE => multiple queries are combined into a single one

// ! QUES) display the count of emp in each department who are working in "new york"

// ? not possible using find()

// ! using aggregate() -> we can only fetch data, using aggregate I can perform complex operations.

// ! whatever operations are performed using aggregate, donot modify the data

// ? syntax for aggregate()
// ? each stage represents a query.
db.collection_name.aggregate([{ stage1 }, { stage2 }, { stage3 }]);

// ! we have certain aggregation operators -> $match, $group, $lookup, $unwind, $project. etc

// ? in each stage only one aggregation operator is used. (mandatory).

// ? syntax for stages : { $aggregation-op: {}}

// ? input to the first stage is the complete collection.
// ! output of each stage is input to the next stage

// ! different aggregation op ============================>

// ! $match => it is used to apply comditions, it is used to filter the documents based on the condition
// ? find all the emp names who are working as clerk

// ! using find method
db.emp.find({ job: "clerk" }, { empName: 1, _id: 0 });

// ! using aggregate
// ? you can use any filter condition inside $match
db.emp.aggregate([
  {
    $match: { job: "clerk" },
  }, // ? stage 1
  {
    // projection
    $project: {
      empName: 1,
      _id: 0,
    },
  }, // ? stage 2
]);

db.emp.aggregate([
  {
    // projection
    $project: {
      empName: 1,
      job: 1,
      _id: 0,
    },
  }, // ? stage 2
  {
    $match: { job: "clerk" },
  }, // ? stage 1
]);

// ! find all the emp names who are working as clerk and display their names as user names (allias)

db.emp.aggregate([
  {
    $match: { job: "clerk" },
  }, // ? stage 1
  {
    // projection
    $project: {
      username: "$empName", // alliasing.
      _id: 0,
    },
  }, // ? stage 2
]);
// ! whenever we are passing doc fields as value then we have to use double quotes and $symbol before it.

// ? aliasName: "$fieldName": $projectOp

// ! Display the age above 25

db.emp.aggregate([
  {
    $match: { job: "clerk" },
  }, // ? stage 1
  {
    // projection
    $project: {
      username: "$empName",
      _id: 0,
      // "$age" here means that age is basically the field of the document.
      age: { $gt: ["$age", 25] },
    },
  }, // ? stage 2
]);

// ? $group -> It is used to group the documents based on some value.
// ! syntax for $group.
{
  $group: {
    _id: "$fieldName"; // ? grouping value, on what basis we have to group the documents. (to avoid duplicates).
    // inside every group I can perform the below written operations
    // ? I can use these below operations inside group stage only
    // count: {$sum: 1},
    // total: {$sum: "$fieldName"},
    // average: {$avg: "$fieldName"},
    // max: {$max: "$fieldName"},
    // min: {$min: "$fieldName"},
  }
}

// ! Find the number of employees in each job (clerk, manager..)

db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 },
    },
  },
]);

// ! Find all employees with salary greater than 2000
db.emp.aggregate([
  {
    $match: { sal: { $gt: 2000 } },
  },
]);

// ! Find all employees

db.emp.aggregate([
  {
    $match: { depNo: { $in: [20, 30] } },
  },
  {
    $project: { empName: 1, hireDate: 1, _id: 0 },
  },
]);

// ! Find all managers and analysts in dept 10 or 30

db.emp.aggregate([
  {
    $match: { $and: [{ job: { $in: ["manager", "analyst"] } }] },
  },
]);

// ! Find all active departments

// ! Find all the employees hired after 1985

ISODate("YYYY-MM-DD");
// $gt - > ISODate("1985-12-31")
// $gte - > ISODate("1986-01-01")

// db.emp.aggregate([
//   {
//     $match: {
//       hireDate: {$gte: }
//     }
//   }
// ])

// ! ======================= 4th feb, 2026 ======================>

// ! Find the average salary in departments (database => sampleData)

db.employees.aggregate([
  {
    $group: {
      _id: "deptNo",
      averageSalary: { $avg: "$sal" },
    },
  },
]);

// ! Find the max salary in each dept
db.employees.aggregate([
  {
    $group: {
      _id: "$deptNo",
      averageSalary: { $avg: "$sal" },
      maxSal: { $max: "$sal" },
    },
  },
  {
    $project: {
      departmentNo: "$_id",
      averageSalary: 1,
      _id: 0,
      maxSal: 1,
    },
  },
]);

// ! display the count of employees in each job along with their name..

db.employees.aggregate([
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 },
      empName: { $push: "$empName" },
    },
  },
]);

// ? certain date operators in like $year

// ! ================= $addFields ===========================> this is used to add a field while fetching the documents.

// ! Find the names of the employee along with their annual salary

// ? syntax
db.collection_name.aggregate([
  {
    $addFields: {
      fieldName: value,
    },
  },
]);

// it will show but database will be unaffected, no isRemote is added in the database
db.employees.aggregate([
  {
    $addFields: {
      isRemote: false,
    },
  },
]);

($add, $multiply, $divide, $mod, $subtract);

{
  $op: [v1, v2];
}

db.employees.aggregate([
  {
    $addFields: {
      annualSal: {
        $multiply: ["$sal", 12],
      },
    },
  },
]);

// ! Find employees hire after 1995
db.employees.aggregate([
  {
    $addFields: {
      year: { $year: "$hireDate" },
    },
  },
  {
    $match: {
      year: { $gte: 1985 },
    },
  },
]);

// ? we can use the same operator multiple times.

// ! Display the hired year along with annual salary of each employee

db.employees.aggregate([
  {
    $addFields: {
      anSal: {
        $multiply: ["$sal", 12],
      },
    },
  },
  {
    $addFields: {
      year: { $year: "$hireDate" },
    },
  },
  {
    $project: {
      empName: 1,
      anSal: 1,
      year: 1,
      _id: 0,
      month: 1,
    },
  },
]);

// ! $lookup => it is used to perform join operations between two or more collections.

db.collection_name.aggregate([
  {
    $lookup: {
      from: "collection name to be joined",
      foreignField: "name of the field to be matched for foreign collection",
      localField: "name of the field to be matched of local collection",
      as: "alias name",
    },
  },
]);

db.userInfo.insertMany([
  {
    _id: "A123",
    name: "ashwin",
    contact: "C123",
  },
  {
    _id: "V123",
    name: "varun",
    contact: "C234",
  },
]);

db.contactInfo.insertMany([
  {
    _id: "C123",
    email: "ashwin@gmail.com",
    user: "A123",
  },
  {
    _id: "C234",
    email: "varun@gmail.com",
    user: "V123",
  },
]);

// ? merged contactInfo with userInfo
db.userInfo.aggregate([
  {
    $lookup: {
      from: "contactInfo",
      foreignField: "_id",
      localField: "contact",
      as: "contactInfo", // it comes in the form of array,
    },
  },
]);

db.contactInfo.aggregate([
  {
    $lookup: {
      from: "userInfo",
      foreignField: "_id",
      localField: "user",
      as: "user", // usually we pass localField in the alias name.
    },
  },
]);

// ! ===== ifNull operator, sort, skip, limit in aggregate ============>

// ? ============== 9th feb, 2026 ===========================>

// ! display the name of the employee having 3rd highest salary
db.employees.aggregate([
  {
    $group: {
      _id: "$sal",
      name: { $push: "$empName" },
    },
  },
  {
    $sort: {
      _id: -1,
    },
  },
  {
    $skip: 2,
  },
  {
    $limit: 1,
  },
  {
    $unwind: "$name",
  },
  {
    $project: {
      _id: 0,
    },
  },
]);

db.employees.aggregate([
  {
    $group: {
      _id: "age",
      count: { $sum: 1 },
    },
  },
]);

// ! count the total number of employees
// ! what is the amount company

// ! bucket --> used to group the docs based on the certain ranges
// ! syntax -->
db.emp.aggregate([
  {
    $bucket: {
      groupBy: "fieldname",
      boundaries: [0, 20, 30, 50],
      default: "greater than 50",
      output: {
        count: { $sum: 1 },
        age: { $push: "$age" }, // ? acc
      },
    },
  },
]);

// ! min <= x < max
// ? first bucket will be from (0 to 20 with bucket id 0) (20 is excluded)

// ? second bucket will be from (20 to 30 with bucket id 20)

// ! bucket auto --> this will create buckets automatically with ranges such that each bucket will contain almost same no. of docs

// ! count to total number of employees
db.employees.find().count();
db.employees.find().countDocuments();

// ! what is the amount company is spending on emp salary (sal)
db.employees.aggregate([
  {
    $group: {
      _id: "abc",
      totalExp: { $sum: "$sal" },
      count: { $sum: 1 },
    },
  },
]);




db.emp.find({_id: ObjectId("66a2351")}).explain("executionStats");

db.emp.find({ empName: "blake"}).explain();


// ? Indexing In MongoDB

let arr = [12, 34, 5, 6, 23, 7, 8];// ? O(n) B Trees
let arr2 = [1, 2, 3, 5, 6]; // ? O(log n)


// ! find ---> age, age and sal, sal



