const http = require('http');
require('dotenv').config();


const hostName = process.env.HOSTNAME
const port = process.env.PORT
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("content-type","text/html");
    // res.end("<h4>Welcome into node</h4>");
    // res.setHeader("content-type","application/json");
    // res.end(JSON.stringify({message:"Hello node"}));

    // res.end(req.url)
    if(req.url == "/" || req.url == "/home") res.end("<h3>Home page</h3>");
    else if(req.url == "/about") res.end("<h3>about page</h3>");
    else if(req.url == "/contact") res.end("<h3>contact page</h3>")
    else res.end("<h3> 404 page notfound</h3>")

    
});

server.listen(port, hostName, ()=>{
console.log(`server is running on http://${hostName}:${port}`)
})