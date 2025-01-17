//handeling req/res in node require more efforts from developers
//for handeling routes you need to use if else ladder
//this will done in node also but requires efforts
//for making it easy and faster development Express framework comes into picture

// What is express
// it is a web allpication framework for node js
// that provides various features that make application easy and fast
// it provides easy way to create server,render html,hndle req/res etc.

// json object to string => JSON.stringyfy()
// json string into object => JSON.parse()

const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  let product = {
    id: 1,
    name: "redmi",
    price: 9000,
  };
  // res.send("<h3>response from express server</h3>")
  res.send(JSON.stringify(product));
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
