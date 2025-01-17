// we can use middleware when we want execute some functionality on http request
// -> before it reaches to controller
// app.get('/',(req,res)=>{
// let product = {
//     id:1,
//     name:"redmi",
//     price:9000
// };)
// middleware is a function will get called
//the function has access to the request(req),response(res) objects
//the function uses "next()" to pass on call to the next middleware or controller

const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.get("/",showHome, (req, res) => {
  res.send("<h3>home page</h3>");
});

app.use(login);
// position of middleware is important for excution
// if middleware is used after the routes then it will not be excuted for those routes
app.get("/about", (req, res) => {
  res.send("<h3>About page</h3>");
});

app.get("/contact", (req, res) => {
  res.send("<h3>Contact page</h3>");
});

app.listen(port, "localhost", () => {
  console.log("server is running on:", port);
});

function showHome(req,res,next){
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
console.log("home middleware called")
next();
}
function login(req, res, next) {
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  console.log("login function called", req.url);
  next();
}
