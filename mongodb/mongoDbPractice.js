db.books.insertOne({
  name: "Atomic Habits",
  author: "James Clear",
  genre: "Self Help",
});

// ! if I manually add the _id then let us see what happens
db.books.insertOne({
  name: "Subtle Art",
  author: "Mark Manson",
  genre: "Self Help",
  _id: 1,
});

db.books.insertOne({
  name: "Subtle Art",
  author: "Mark Manson",
  genre: "Self Help",
  _id: 1,
});
// ! If i again try to add the document with same _id then mongodb will throw an error !!!

db.books.insertOne({
  name: "Harry Potter",
  author: "JK Rowling",
  genre: "sci-fi",
  publishDate: new Date(), // today's date
  publisher: undefined, // ? undefined was not stored, instead null was stored in the database
});

db.books.insertOne({
  name: "Rich Dad Poor Dad",
  author: "Mark Rich",
  genre: "self-help",
  publishDate: "new Date()",
  publisher: "undefined",
});

// ! let us try to pass _id in the form of string
db.books.insertOne({
  name: "The magic of Thinking Big",
  author: "Charles Darwin",
  _id: "1",
});

// ! inserting the multiple elements in MongoDB
db.books.insertMany([
  // ? first document
  {
    name: "Think And Grow Rich",
    author: "Napolean Hill",
    genre: "Self-Help",
  },
  // ? second document
  {
    name: "The Alchemist",
    author: "Napolean Hill",
    genre: "sci-fi",
  },
]);

// ! For fetching the single document, we use findOne() method,we pass 3 arguments in it. {filterCondition}, {projection}, {options}

// ? Syntax for the findOne() method.
db.collection_name.findOne({ filterCondition }, { projection }, { options });

// ! Q) Display the details of the book whose name is "Atomic Habits"

db.books.findOne({ name: "Atomic Habits" });

db.sampleData2.insertMany([
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

// !  Q2 => fetch the details of the first user whose gender is f
db.sampleData2.findOne({ gender: "f" });

// ! Q3 => fetch the details of the first user whose gender is m
db.sampleData2.findOne({ gender: "m" });

// ? { projections } => using projections, we can display or hide the fields in the output. using projection _id will be displayed by default

db.sampleData2.findOne({ name: "Ashwin" }, { name: 1 });
db.sampleData2.findOne({ name: "Ashwin" }, { _id: 0, name: 1 });
db.sampleData2.findOne({ name: "Sirisha" }, { _id: 0, name: 1 });

// ! MongoDb has been covered till 300th line

// ? for fetching the multiple documents, use find() method, it returns me the array of documents which will be matched

db.sampleData2.find(); // ! It basically returns me the array of all the documents present in the collection

// ! ============================= 18 feb, 2026 MongoDB Practice

// ? Deletion In MongoDB ==> Deleting the document, once deleted it is deleted, you can't roll back

// ? for deleting a single document ==> use deleteOne() => It will basically delete the first matched document.

// ! It returns me the array of all the documents present in the collection.
db.collection_name.find();
db.collection_name.findOne({});

// ? Deleting a single document in mongoDB

db.collection_name.deleteOne({ filterCondition });

// ! When no filter conditions are passed, then the first document would be deleted

db.collection_name.deleteOne({});

//! Operators ==> all operators in mongodb starts with "$"
//~ query operators: used in filter object
//? ==> comparison operators (less than, not equals to, etc.)
//? ==> logical operators (logical AND, logical OR, etc..)
//? ==> array operators (size, all, elemMatch, etc..)
//? ==> element operators (exists, type, etc..)
//? ==> evaluation operators (regex, expr, etc..)
//~ update operators
//? ==> field update op (set, unset, etc..)
//? ==> arithmetic update op (max, min, inc, etc..)
//? ==> array update op (push, pull, etc..)
//~ aggregation operators
//? ==> pipeline stages op (match, group, etc..)
//? ==> accumulator op (max, min, avg, count, sum)
//? ==> arithmetic and date op (add, subtract, date, etc..)
//~ projection operators ($, $slice, etc..)
//~ geospatial operators ==> (GeoJSON format)
//! indexing, replication, sharding (theory)

//! ============================ Comparison operators =============================
//? equals to ----------------------------------------> $eq
//? not equals to ------------------------------------> $ne
//? greater than -------------------------------------> $gt
//? greater than or equals to ------------------------> $gte
//? lesser than --------------------------------------> $lt
//? lesser than or equals to -------------------------> $lte
//? in -----------------------------------------------> $in
//? not in -------------------------------------------> $nin

// ! Syntax for first 6 operators
// ? { fieldName: { $op: value}}

// ! Ques => Find all the employees who are having salary greater than 1000
db.emp.find({ sal: { $gt: 1000 } });

// ! Ques => find all the employees who are working as clerk.

db.emp.find({ job: "clerk" }, { _id: 0, empName: 1 });

// ? Solving the above same quesiton with the help of the operators

db.emp.find({ job: { $eq: "clerk" } }, { _id: 0, empName: 1 });

// ! Case1 => When the multiple conditions are applied on the same field: the last condition get executed

db.emp.find(
  { deptNo: 10, deptNo: 20, deptNo: 30, deptNo: 40 },
  { _id: 0, empName: 1 },
); // ? This will return the documents whose deptNo is 20

//~ syntax for $in and $nin --> ($in:= it returns the documents which fulfills any one of the given value)
//~ ($nin:= it returns the documents which fails to fulfill the given values)
//? { fieldName: { $in/$nin: [value1, v2, v3,......] } }

// ! Find all the employees from dept 10 or 20 .
db.emp.find({ deptNo: { $in: [10, 20] } }, { _id: 0, empName: 1, deptNo: 1 });

// ~ Playing with $in operator
db.emp.find(
  { deptNo: { $in: [10, 10000, 20000] } },
  { _id: 0, empName: 1, deptNo: 1 },
);

db.emp.find({ deptNo: { $nin: [10, 20] } }, { _id: 0, empName: 1, deptNo: 1 });

// ! Ques => Find the employees whose education is not bachelor
db.emp.find(
  { education: { $ne: "bachelor" } },
  { _id: 0, empName: 1, education: 1 },
);

// ? collation is basically used for avoiding the case senstivity

db.emp.find(
  { education: { $ne: "Bachelor" } },
  { education: 1, _id: 0 },
  { collation: { locale: "en", strength: 2 } }, //? to avoid case sensitivity
);
//~ locale --> language
//~ strength:2 --> uppercase===lowercase but accent in-sensitive

//! ============================ Logical operators =============================

//? logical and -----------------------------------> $and
//? logical or ------------------------------------> $or
//? logical nor -----------------------------------> $nor
//? logical not -----------------------------------> $not

//? syntax for $and, $or, $nor
//? { $op: [{filterCondition1}, {filtercondition2}, {filtercondition3}, ........] }

// ? MongoDB has been covered till 338 line no. ==================================================>>>>>>>>>>>

//! Query employees with sal >= 1100 and sal < 2000. (not this)

db.emp.find(
  {
    $and: [
      // filter condition 1
      {
        sal: { $gte: 1100 },
      },
      {
        sal: { $lt: 2000 },
      },
    ],
  },
  {
    _id: 0,
    sal: 1,
  },
);

//! ques>> find all the names of employees from dept 10 or 20

// ? Using $in operator
db.emp.find({ deptNo: { $in: [10, 20] } }, { deptNo: 1 });

//~ Solving the same Problem with the help of $or operator
db.emp.find(
  {
    $or: [
      // First condition
      {
        deptNo: { $eq: 10 },
      },
      {
        deptNo: { $eq: 20 },
      },
    ],
  },
  {
    deptNo: 1,
  },
);

//~ working of $nor --> it will fetch all the documents which fails to fulfill the given conditions

//? syntax for $not ==> logical not will inverse the given condition (example: if passed $gt:1200, inverse condition will be $lte:1200)
//? { fieldName: {$not: { expression }} }

// expression --> x>=8 inverse x<8
// expression --> x>8 inverse x<=8
// expression --> y=="abc" inverse y!= "abc"

// ! Doing the Revision of ISO Dates In MongoDB

//! get all the names and date of joining who have joined after 1985
//? {fieldName:ISODate("YYYY-MM-DD")}
db.emp.find({ hireDate: { $gt: ISODate("1985-12-31") } }, { hireDate: 1 });


