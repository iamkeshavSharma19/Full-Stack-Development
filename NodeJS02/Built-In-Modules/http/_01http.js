//&http module is the core module used to create a server in NodeJS.

//!STEPS TO CREATE A HTTP SERVER
//?1) import http.
//?2) use createServer()
//?3) assign a PORT number.
//?4) define routes.

import http from "node:http";

let server = http.createServer((req, res) => {
  //console.log(req); // req.body, req.params, req.cookies
  //console.log(res); // res.write(), res.json(), res.end()
  //res.write("Hello World");//write method will send the response back but it will not end the response cycle,browser will keep loading...
  //res.end("Hello Universe"); // end method will end the response cycle.
  //&res.end() indicates that all chunks are received.
  //~If I write both res.write("Hello World") and res.end("Hello Universe"),then "Hello WorldHello Universe" will be printed onto the browser.
  //&If I write res.end before res.write then res.end data will be sent but error will come.
  //res.write("Hello Universe again");
  //res.end("<h1>Hello Universe</h1>");//Hello Universe.when we send h1 tag from the server,browsers understand the h1 tag but donot understand other tags
  //res.end("<h2>Hello Universe</h2>");//<h2>Hello Universe</h2>
  //&for sending data in the other tags.
  //   res.setHeader("content-type", "text/html");
  //   res.statusCode = 200;
  //   res.end("<h2>Hello world</h2>");

  //&you can also do the above thing in the below way as well
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h2>Hello Universe</h2>");
});

//~restart the server,to avoid this either download the nodemon or use the below command.
//~Install nodemon or use the command ===> node --watch _01http.js

server.listen(9000, (err) => {
  //error first callback
  if (err) {
    console.log("Unable to start the server at port 9000");
  }
  console.log("Server started at port 9000");
});
