import Book from "../model/book-model.js";

export const handleGetAllBooks = async (req, res) => {
  try {
    console.log("Hii");
    let { title, author, year } = req.body;
    if (!title || !author || !year) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const newlyCreatedBook = await Book.create({ title, author, year });
    if (!newlyCreatedBook) {
      return res.status(400).json({
        message: "Unable to create a book",
      });
    }

    res.status(201).json({
      message: "book created successfully",
      data: newlyCreatedBook,
    });
  } catch (error) {
    //?500 status means there is an error in the backend server
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
export const handleCreateBook = (req, res) => {};
export const handleGetSingleBook = (req, res) => {};
export const handleEditBook = (req, res) => {};
export const handleDeleteBook = (req, res) => {};
export const handleDeleteAllBooks = (req, res) => {};
