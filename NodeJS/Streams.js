import { createServer } from "node:http";
import fs from "node:fs";

createServer((req, res) => {
  if (req.url === "/slow") {
    //~read a large file
    setTimeout(() => {
      fs.readFileSync("./small-text.txt", "utf-8");
      res.end("file read");
    }, 3000);
    //~ Blocking of main thread
    //~ Slow method basically blocks our main thread
    //~ tasks which runs on main thread is called CPU Bound Tasks
  } else if (req.url === "/fast") {
    //~read a large file
    setTimeout(() => {
      let data = fs.createReadStream("./small-text.txt", "utf-8");
      data.pipe(res);
      res.end("Large file read using streams");
    }, 3000);
    res.end("Large file read using streams");
  } else {
    res.end("Please enter a valid end point => /slow or /fast");
  }
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
//?BackPressure In Node JS ==> Read more about it
//?two more modules are left ==> os module and path module