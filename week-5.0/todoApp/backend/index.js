const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.listen(`Server is running on ${port}`);
