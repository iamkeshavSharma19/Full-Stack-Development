import http from "node:http";
import fs from "node:fs";


let PORT = 9000;

let server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    //&Sending HTML file
    let src = fs.createReadStream("./index.html", "utf-8");
    res.writeHead(200, { "content-type": "text/html" });
    src.pipe(res);
  } else if (req.url === "/css") {
    //&Sending CSS file
    let src = fs.createReadStream("./style.css", "utf-8");
    res.writeHead(200, { "content-type": "text/css" });
    src.pipe(res);
  } else if (req.url === "/json") {
    let src = fs.createReadStream("./data.json", "utf-8");
    res.writeHead(200, { "content-type": "application/json" });
    src.pipe(res);
  } else {
    res.end("<h1>Page Not found</h1>");
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server started at", PORT);
});
