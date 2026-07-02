import mongoose from "mongoose";

//&from frontend we need 3 things => title, year, author

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      //~suppose if i donot get title from frontend then we can also provide error from the backend.
      trim: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
    },

    author: {
      type: String,
      required: [true, "Please provide author name"],
      trim: true,
    },

    year: {
      type: Number,
      required: [true, "Please provide publication year"],
      min: [1000, "Publication year cannot be less than 1000"],
      max: [
        new Date().getFullYear(),
        "Publication year cannot be more than current year",
      ],
    },
  },
  //?By default timestamps is false.
  { timestamps: true },
);

//&we will give the collection name of the database inside mongoose.model("collection-name")
export default mongoose.model("book", bookSchema);
// mongoose.model("collectionName", schema);
