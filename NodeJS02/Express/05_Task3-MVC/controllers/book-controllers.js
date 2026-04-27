import { Book } from "../models/book-models.js";

async function handleAddBook(req, res) {
  console.log(req.body);
  try {
    const newBook = req.body;
    let newlyCreatedBook = await Book.create(newBook);
    if (!newlyCreatedBook) {
      return res.status(400).json({
        success: false,
        message: "Unable to create book",
      });
    }

    res.status(201).json({
      success: true,
      message: "Book created",
      data: newlyCreatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleGetAllBooks(req, res) {
  try {
    let allBooks = await Book.find({});

    if (allBooks.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Books available",
      });
    }

    res.status(200).json({
      message: "All books fetched",
      data: allBooks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleGetSingleBook(req, res) {
  try {
    const bookId = req.params.id;
    let myBook = await Book.findById(bookId);
    if (!myBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book found",
      data: myBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleUpdateBook(req, res) {
  try {
    const bookId = req.params.id;
    const newBookData = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookId, newBookData, {
      new: true,
    });

    if (!updatedBook) {
      return res.status({
        success: false,
        message: "Book not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleDeleteBook(req, res) {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) {
      return res.status({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export {
  handleGetAllBooks,
  handleGetSingleBook,
  handleAddBook,
  handleUpdateBook,
  handleDeleteBook,
};
