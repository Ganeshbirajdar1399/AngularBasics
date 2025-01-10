const fs = require("fs");
//creating file with bloking (synchronous)

// const data = "first line in the file is synchronous function";
// fs.writeFileSync("index.txt", data);
// console.log("file created successfully");

//fetching data from file with synchronous calling function
//when file name is incorrect--we can use try catch block

// try {
//   const content = fs.readFileSync("index.txt", "utf-8");
//   console.log(content);
// } catch (error) {
//   // console.log(error.code,"error");
//   if (error.code === "ENOENT") {
//     console.log("file not found");
//   } else throw error;
// }

//asynchronous calling (non-blocking)
// fs.readFile('index.txt', 'utf-8', (err, data)=>{
//     if(err){
//         return console.log('error in file reading');
//     }
//    insertData(data);
//     console.log("file reading complete");
// });

// const insertData = (readData) => {
//     fs.writeFile('demo.txt',readData,(err)=>{
//         if(err){
//             console.log('error in file creating');
//             return;
//         }
//             console.log('file created and data inserted into demo.txt successfully');

//     })
// }

// fs.appendFile("index.txt","\n this is the new line in append function",(err)=>{
//   console.log("file updated");
// }
// );

// fs.unlink("index.txt",(err)=>{
//   console.log("file deleted successfully");
// })

fs.mkdir("node_modules", (err) => {
  console.log("node_modules folder created");
  if (!err) {
    fs.writeFile(
      "node_modules/index.json",
      '{"email":"abc@gmail.com"}',
      "utf-8",
      (err) => {
        console.log("folder node_modules created and data add into index.json");
        if (!err) {
          fs.readFile("node_modules/index.json", "utf-8", (err, data) => {
            const fileData = JSON.parse(data);
            console.log("file data: ", fileData);
          });
        }
      }
    );
  }
});

fs.rename("index.txt", "demo.txt", (err) => {
  console.log("file renamed successfully");
});

fs.rename("node_modules", "jsonFolder", (err) => {
  console.log("folder renamed successfully");
});
