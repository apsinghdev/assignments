const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL);

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {todo};