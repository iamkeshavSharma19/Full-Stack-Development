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

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("WELCOME");
});

app.get("/all-books", (req, res) => {
  res.status(200).json({
    message: "Book fetched successfully",
    data: Books,
  });
});

//&GET SINGLE BOOK BY ID
app.get("/books/:id", (req, res) => {
  console.log(req.params);
  console.log(req.params.id);
  let bookId = parseInt(req.params.id);
  let myBook = Books.find((book) => book.id === bookId);
  console.log(myBook);
  if (!myBook) {
    return res.status(400).json({
      message: "Book not found",
    });
  }

  res.status(200).json({
    message: "Book Found",
    data: myBook,
  });
});

//?POST Adding a new book
app.post("/add-book", (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  let { title } = req.body;

  let newBook = {
    title,
    id: Books.length + 1,
  };

  Books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    data: newBook,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Unable To start server at", PORT);
  }

  console.log("Server started at ", PORT);
});

