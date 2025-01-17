const express = require('express');
const app = express();

// console.log(__dirname,"dirname");
// express.static();
//static middleware provide by express serve static content
//static resources are all those resources which you want to provide direct access to the user
//ex. html,audio,video,pdf,image

app.use(express.static(__dirname + "/public")) 
app.get("/",(req,res)=>{
res.send("<h3>home page</h3>")
return;
})

app.listen(5000,()=>{
    console.log('server is running on 5000');
})