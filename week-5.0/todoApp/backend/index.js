const express = require("express");
const app = express();
const port = 4000;
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());

function validateUserData(req, res, next) {
  try {
    createTodo.safeParse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: "inputs are not correct" });
  }
}

function validateUserId(req, res, next) {
  try {
    updateTodo.safeParse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ msg: "Incorrect ID" });
  }
}

app.post("/todo", validateUserData, async (req, res) => {
  await todo.create({
    title: req.body.title,
    description: req.body.description,
    completed: false,
  });
  res.json({ msg: "todo created" });
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/completed", validateUserId, async (req, res) => {
  // get id using query params
  const id = req.body.id;
  // update the value of completed to true
  await todo.updateOne({_id:id},{completed: true});
  res.json({msg:'todo has been marked as true'})
});

app.listen(`Server is running on ${port}`);
