const http = require('http');
const { json } = require('stream/consumers');
const hostName = "localhost";
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    // res.setHeader("content-type","text/html");
    // res.end("<h4>Welcome into node</h4>");
    res.setHeader("content-type","application/json");
    res.end(JSON.stringify({message:"Hello node"}));
});

server.listen(port, hostName, ()=>{
console.log(`server is running on http://${hostName}:${port}`)
})