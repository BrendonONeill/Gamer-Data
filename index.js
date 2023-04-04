const express = require("express");
const cors = require("cors");
const needle = require("needle");
require("dotenv").config();

const app = express();
app.use(cors());

app.listen(8000, () => {
  console.log("server up and running");
});
