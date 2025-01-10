const fs = require("fs");
//creating file with bloking (synchronous)

const data = "first line in the file is synchronous function";
fs.writeFileSync("index.txt", data);
console.log("file created successfully");

//fetching data from file with synchronous calling function
//when file name is incorrect--we can use try catch block

try {
  const content = fs.readFileSync("index.txt", "utf-8");
  console.log(content);
} catch (error) {
  // console.log(error.code,"error");
  if (error.code === "ENOENT") {
    console.log("file not found");
  } else throw error;
}


//asynchronous calling (non-blocking)
fs.readFile('index.txt', 'utf-8', (err, data)=>{ 
    if(err){
        return console.log('error in file reading');
    }
   insertData(data);
    console.log("file reading complete");
});

const insertData = (readData) => {
    fs.writeFile('demo.txt',readData,(err)=>{
        if(err){
            console.log('error in file creating');
            return;
        }
            console.log('file created and data inserted into demo.txt successfully');
    
    })
}

