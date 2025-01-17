const express = require("express");
require('dotenv').config();
const app = express();
const fs = require("fs");
const port = process.env.PORT;

app.get("/", (req, res) => {
  const content = fs.readFileSync("index.html");
  // res.send("<h3>response from express server</h3>")
  res.end(content);
});
app.get("/about", (req, res) => {
  res.send("<h3>About page</h3>");
});

app.get("/contact", (req, res) => {
  res.send("<h3>Contact page</h3>");
});

app.listen(port, "localhost", () => {
  console.log("server is running on:", port);
});
