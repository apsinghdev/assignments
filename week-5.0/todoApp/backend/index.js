const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});


app.listen(`Server is running on ${port}`);
