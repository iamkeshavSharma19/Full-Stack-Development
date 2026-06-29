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

//& EDIT A BOOK
app.put("/edit-book/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }

  try {
    let { title } = req.body;
    const bookID = parseInt(req.params.id);
    const bookToBeEdited = Books.find((ele) => ele.id === bookID);
    bookToBeEdited.title = title;
    res.status(200).json({
      message: "book updated",
      data: bookToBeEdited,
    });
  } catch (error) {
    res.status(400).json({
      message: "Unable to edit book",
      error,
    });
  }
});

//?Delete A Book
app.delete("/delete-book/:id", (req, res) => {
  try {
    //?If index is not present then this method will return us -1.
    const bookID = parseInt(req.params.id);

    const index = Books.findIndex((ele) => ele.id === bookID);
    if (index === -1) {
      res.status(400).json({
        message: "Book Not Found",
      });
    }

    Books.splice(index, 1);

    res.status(200).json({
      message: "Book Deleted",
      data: Books,
    });
  } catch (error) {
    res.status(400).json({
      message: "Unable to delete book",
      error,
    });
  }
});

//* Delete All Books
app.delete("/delete-all", (req, res) => {
  try {
    Books.splice(0, Books.length);
    res.status(200).json({
      message: "All Books deleted",
      data: Books,
    });
  } catch (error) {
    res.status(400).json({
      message: "Unable to delete all books",
      error,
    });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Unable To start server at", PORT);
  }

  console.log("Server started at ", PORT);
});
