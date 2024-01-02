const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(
  "mongodb+srv://ajeet:ajeet@mern-estate.euetct6.mongodb.net/?retryWrites=true&w=majority"
);

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);
