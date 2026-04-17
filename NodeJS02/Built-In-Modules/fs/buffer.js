import fs from "node:fs";

fs.readFile("./class.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Something went wrong");
  }
  //&Memory consumption of the server increases if the file size is large.So we will divide our file data in smaller chunks.We use Streams And Buffers.
});

//?STREAMS AND BUFFERS ==============>>>>>>>

//!BUFFER is a temporary space in a memory.(binary data of file [010101]/hexadecimal is stored in the Buffer.)

//!STREAMS means continuously reading and writing data in smaller-smaller chunks.

//&DEFAULT BUFFER SIZE
//~normal files => 64kb
//~Large files, audio and videos => 128kb

//!STREAMS ARE Of 4 types
//&1) Writable stream
// fs.createWriteStream("./demo.py");

//&2) Readable stream
// fs.createReadStream("./course.txt", "utf-8");

//&3) Duplex stream ==> important.in duplex we can read and write both.for that we use pipe() method.
//~Syntax of pipe method ==> src.pipe(destn)

// let src = fs.createReadStream("./course.txt", "utf-8");
// console.log(src);
// let destn = fs.createWriteStream("./demo.py");
// console.log(destn);
// src.pipe(destn);

//&4) Transform Stream

//!HOW CHUNKS WORKS
let src = fs.createReadStream("./log.txt", {
  encoding: "utf-8",
  highWaterMark: 1, //size of chunk is 1 byte.
});

//& 1 byte = 8 bits ===> 1 alphabet takes 8 bits(1 byte) of space

//~on here is basically an event,when the data comes in chunk this (on) event will be fired and this callback function will be called for every character.
src.on("data", (chunk) => {
  console.log(chunk);
});
