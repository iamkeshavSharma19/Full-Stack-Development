import express from "express";

const Books = [
  {
    id: 1,
    title: "Book1",
  },
  {
    id: 2,
    title: "Book2",
  },
];

const app = express();
const PORT = 9000;

//&Middleware
app.use(express.json());

//&Routes
//&=== HOMEPAGE ROUTE
app.get("/", (req, res) => {
  //&sending the status code as well

  res.status(200).send("Welcome");
});

//~Get Route to access all the Books
app.get("/all-books", (req, res) => {
  res.status(200).json({
    message: "fetched all books",
    data: Books,
  });
});

//*POST request for adding a new book
app.post("/add-book", (req, res) => {
  console.log(req.body);
  if (!req.body.title) {
    return res.status(400).json({
      message: "Title not found",
    });
  }
  let newBook = {
    id: Books.length + 1,
    title: req.body.title,
  };

  Books.push(newBook);

  res.status(201).json({
    message: "New Book created",
    data: newBook,
  });
});

//&=== GET SINGLE BOOK
//~data we pass in the url is received in req.params.
app.get("/get-book/:id", (req, res) => {
  //&inside params object a new key will be made with the name id,and whatever i passed in the url while sending the request === like get-book/2 so in the params object it will be {id : "2"}.
  console.log(req.params);
  let bookId = Number(req.params.id);
  //~here object's reference will be stored inside myBook
  let myBook = Books.find((ele) => ele.id === bookId);

  if (!myBook) {
    return res.status(400).json({
      message: "Book Not found",
    });
  }
  res.status(200).json({
    message: "Book found",
    data: myBook,
  });
});

//&Updating a Single book
app.put("/update-book/:id", (req, res) => {
  let bookId = Number(req.params.id);
  let bookToBeUpdated = Books.find((ele) => ele.id === bookId);
  bookToBeUpdated.title = req.body.title;
  res.status(200).json({
    message: "Book Updated",
    data: bookToBeUpdated,
  });
});

//?Deleting a book
app.delete("/delete-book/:id", (req, res) => {
  let bookId = Number(req.params.id);
  let index = Books.findIndex((ele) => ele.id === bookId);

  if (index === -1) {
    res.status(400).json({
      message: "Book Not Found",
    });
  }

  Books.splice(index, 1);

  res.status(200).json({
    message: "Book Deleted",
    data: Books
  })
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server started at PORT", PORT);
});
