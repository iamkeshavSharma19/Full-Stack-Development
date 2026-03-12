import { createReadStream } from "node:fs";
import http from "node:http";
import { parse } from "node:querystring";


const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("This is home page");
    } else if (req.url === "/form") {
      res.writeHead(200, { "Content-Type": "text/html" });

      const stream = createReadStream("./form.html");
      stream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  } else if (req.method === "POST") {
    if (req.url === "/register") {
      console.log(req.headers["content-type"]);

      if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          console.log("raw body :", body);

          let parsedData = parse(body);

          console.log("parsedData :", parsedData);

          res.write(JSON.stringify(parsedData.userEmail));
          res.end();
        });
      } else {
        res.end("not allowed");
      }
    }
  }
});

server.listen(9000, () => {
  console.log("Server running on port 9000");
});
