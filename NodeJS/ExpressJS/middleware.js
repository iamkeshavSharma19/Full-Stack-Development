import express from "express";

let app = express();

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running on port 9000");
});



// middleware ==> it is a function which comes in between req and res, it has access to res and res object as well.

//?it has a next(), which calls the next middleware, if not called next(),then the request will not go further


//? to use middleware, we have this use() method

//! there are few types of middlewares

//?1) app level middleware
//?2) router level middleware
//?3) built-in middleware
//?4) third party middleware
//?5) error middleware


