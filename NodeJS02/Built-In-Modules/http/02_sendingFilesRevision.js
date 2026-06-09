import http from "node:http";
import fs from "node:fs";

let server = http.createServer((req, res) => {
  //&Sending HTML file
  //   let src = fs.createReadStream("./index.html", "utf-8");
  //~res means sending it to frontend
  //~but when we send file to the front-end,we basically also need to tell the type of the data we are sending as the response
  //   res.writeHead(200, { "content-type": "text/html" });
  //   src.pipe(res);
  //^Sending CSS File
  //   let src = fs.createReadStream("./style.css", "utf-8");
  //   res.writeHead(200, { "content-type": "text/css" });
  //   src.pipe(res);
  //*Sending JSON File
  let src = fs.createReadStream("./data.json", "utf-8");
  res.writeHead(200, { "content-type": "application/json" });
  src.pipe(res);
});

server.listen(3000, (err) => {
  if (err) console.log(err);

  console.log("Server started");
});
