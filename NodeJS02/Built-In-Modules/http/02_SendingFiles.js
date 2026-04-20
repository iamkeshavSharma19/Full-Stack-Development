import http from "node:http";
import fs from "node:fs";

let server = http.createServer((req, res) => {
  //&sending the html file in the response.
  // let src = fs.createReadStream("./index.html", "utf-8");

  // res.writeHead(200, { "content-type": "text/html" });

  // src.pipe(res); //pipe method will also internally end the response also.pipe => left (readable stream) : right (writable stream)

  //~SENDING CSS file
  // let src = fs.createReadStream("./style.css", "utf-8");
  // res.writeHead(200, { "content-type": "text/css" });
  // src.pipe(res);

  //?Sending JSON file
  let src = fs.createReadStream("./data.json", "utf-8");
  res.writeHead(200, { "content-type": "application/json" });
  src.pipe(res);
});

server.listen(9000, (err) => {
  if (err) {
    console.log("Server running 9000");
  }

  console.log("Server running 9000");
});

//&Server Side Rendering is more faster than the client side rendering.
