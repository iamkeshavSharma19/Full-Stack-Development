//& FILE SYSTEM => FS (CORE MODULE).
import fs from "node:fs";

//?fs is an object,which has lot of methods.
//console.log(fs);

//& --------------- SYNCHRONOUS WAY ----------------------------

//~Create A File ==> fs.writeFileSync("file", data)
//& if file is present,create it otherwise if file is present override it.
//!Example1
// console.log(1);
// let val = fs.writeFileSync("./demo.txt", "File Created Sync way");
// if (val === undefined) {
//   console.log("file created");
// }
// console.log(2);

//!Example2
// fs.writeFileSync("./module.txt", "Hello Module");

//? READ A file ==> fs.readFileSync("path", "encoding")
// let data = fs.readFileSync("./module.txt");
// console.log(data); //<Buffer 48 65 6c 6c 6f 20 4d 6f 64 75 6c 65>

// let data2 = fs.readFileSync("./module.txt", "utf-8");
// console.log(data2);

//!UPDATE A FILE ==> fs.appendFileSync("path", data).
//&If I put "\n" then Byee Byee will come in the next line.
// fs.appendFileSync("./module.txt", "\nByee Byee");

//!DELETE A FILE
//fs.unlinkSync("./demo.txt");
//?If I try to delete once again then the error will come ==> No Such file or directory.

//!Asynchronous way ===========================>

//&this callback will be executed only when the file has been created.This callback is also called error first callback.

//?fs.writeFile("path", "data", callback)
// console.log(1);
// fs.writeFile("./user.txt", "Hello Keshav", (err) => {
//   if (err) {
//     console.log("Unable to create file");
//   }

//   console.log("File created");
// });
// console.log(2);

//!Read A FILE
//~fs.readFile("path", "encoding", callback)
// fs.readFile("./index.js", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Unable to read");
//   }
//   console.log("File read successfully");
//   console.log(data);
// });

//!Update A FILE
//~fs.appendFile("path", "data", "callback");
// fs.appendFile("./user.txt", "\nJane Doe", (err) => {
//   if (err) {
//     console.log("Unable to append");
//   }
//   console.log("File Updated successfully");
// });

//!Delete A File
//&fs.unlink("path", "callback");
// fs.unlink("./module.txt", (err) => {
//   if (err) {
//     console.log("Unable to delete");
//   }
//   console.log("File deleted Successfully");
// });

//!Create AND Append ===> CallBack Hell
// fs.writeFile("./course.txt", "Courses are:", (err) => {
//   if (err) console.log("unable to create file");
//   console.log("file created");
//   fs.appendFile("./course.txt", "\nJava Fullstack", (err) => {
//     if (err) console.log("Unable to append course 1");
//     console.log("1 course added");
//     fs.appendFile("./course.txt", "\nMern Stack", (err) => {
//       if (err) console.log("Unable to append course 2");
//       console.log("2 course added");
//     });
//   });
// });

//! =========================== fs Promise ====================
import fsp from "node:fs/promises";

// let res = fsp.writeFile("./log.txt", "I am Logs");
// console.log(res);
// res.then((res) => {
//   console.log("File created");
//   console.log(res);
// });

// res.catch((err) => {
//   console.log("unable to create log.txt");
// });

//!READ A FILE
// let p1 = fsp.readFile("./log.txt", "utf-8");
// console.log(p1);
// p1.then((data) => {
//   console.log("file read success");
//   console.log(data);
// });

// p1.catch((err) => {
//   console.log("unable to read log.txt");
// });

//!CREATE AND UPDATE
// let res1 = fsp.writeFile("./class.txt", "Classes are :");

// res1.then(() => {
//   console.log("File Created");

//   let res2 = fsp.appendFile("./class.txt", "\nHtml Class");

//   res2.then(() => {
//     console.log("HTML class added");

//     let res3 = fsp.appendFile("./class.txt", "\nCSS class");

//     res3.then(() => {
//       console.log("CSS class added");
//     });

//     res3.catch((err) => {
//       console.log("Unable to add CSS class");
//     });
//   });

//   res2.catch((err) => {
//     console.log("Unable to add HTML class");
//   });
// });

// res1.catch((err) => {
//   console.log("Unable to create class.txt");
// });

//!Create And Update using Async And Await.Best Practices =======>>>
async function fsOperation() {
  try {
    await fsp.writeFile("./demo.txt", "I am Demo file");
    console.log("file created");
    await fsp.appendFile("./demo.txt", "\nHello World");
    console.log("Added Data 1");
    await fsp.appendFile("./demo.txt", "\nHello Universe");
    console.log("Added Data 2");
  } catch (error) {
    console.log("Something went wrong in fsOperation");
  }
}

fsOperation();
