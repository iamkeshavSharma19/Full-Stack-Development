import { createServer } from "node:http";
import fs from "node:fs";


createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  let htmlData = fs.readFileSync("./index.html", "utf-8");
  res.end(htmlData); // ✅ use end() not send()
}).listen(3000, (err) => {
  if (err) console.log(err);
  console.log("running on port 3000");
});

//?json content type to send


