//! Steps to perform for every model file
//~1) import mongoose.
//~2) define a structure.
//~3) create a model/collection.
//~4) export the model/collection.

//!1)
import mongoose from "mongoose";

//!2) for defining structure we use an instance/object of Schema class

let feedbackSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true, //?this will make sure that while saving username is there
    unique: true, //?this will make sure that username is unique
  },
});

console.log(feedbackSchema);


//? inside model(), the first argument we pass is the name of the collection,normally we pass the name as singular and pascal case

//? mongoose will create a collection named as feedbacks (plural + lowercase)



//!3) for creating model/collection, use model("collection-name", schema)

//? model("collection-name", schema)

const FeedbackModel = mongoose.model("Feedback", feedbackSchema);

export default FeedbackModel;

