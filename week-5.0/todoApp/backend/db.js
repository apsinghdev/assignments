const mongoose = require("mongoose");
const { boolean } = require("zod");
const { Schema } = mongoose;
mongoose.connect(
  "mongodb+srv://ajeet:ajeet@mern-estate.euetct6.mongodb.net/?retryWrites=true&w=majority"
);

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: boolean,
});

const todo = mongoose.model("todo", todoSchema);
