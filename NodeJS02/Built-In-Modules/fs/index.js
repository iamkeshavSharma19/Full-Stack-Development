//& FILE SYSTEM => FS (CORE MODULE).
import fs from "node:fs";

//?fs is an object,which has lot of methods.
console.log(fs);

//& --------------- SYNCHRONOUS WAY ----------------------

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
fs.unlinkSync("./demo.txt");
//?If I try to delete once again then the error will come ==> No Such file or directory.
