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

function validateUserId(req,res,next){
 try{
    updateTodo.safeParse(req.body);
    next();
 } catch(error){
    res.status(400).json({msg:"Incorrect ID"})
 }
}

app.post("/todo", validateUserData, async (req, res) => {
    await todo.create({
        title: req.body.title,
        description: req.body.description,
    })
    res.json({msg:'todo created'});
});



app.get("/todos", validateUserId,(req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(`Server is running on ${port}`);
