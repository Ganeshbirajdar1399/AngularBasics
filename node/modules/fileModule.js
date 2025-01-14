const fs = require("fs");
const { finished } = require("stream");
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

// fs.mkdir("node_modules", (err) => {
//   console.log("node_modules folder created");
//   if (!err) {
//     fs.writeFile(
//       "node_modules/index.json",
//       '{"email":"abc@gmail.com"}',
//       "utf-8",
//       (err) => {
//         console.log("folder node_modules created and data add into index.json");
//         if (!err) {
//           fs.readFile("node_modules/index.json", "utf-8", (err, data) => {
//             const fileData = JSON.parse(data);
//             console.log("file data: ", fileData);
//           });
//         }
//       }
//     );
//   }
// });

// fs.rename("index.txt", "demo.txt", (err) => {
//   console.log("file renamed successfully");
// });

// fs.rename("node_modules", "jsonFolder", (err) => {
//   console.log("folder renamed successfully");
// });

// fs.mkdir("mainFolder", (err) => {
//   console.log("mainFolder folder created");
//   if (!err) {
//     fs.mkdir("mainFolder/subFolder1", (err) => {
//       console.log("subfolder1 created");
//       if (!err) {
//         fs.writeFile(
//           "mainFolder/subFolder1/subFolderFile1.json",
//           '{"email":"abc@gmail.com"}',
//           "utf-8",
//           (err) => {
//             console.log(
//               "folder subFolder1 created and data add into subFolderFile1.json"
//             );
//             if (!err) {
//               fs.readFile(
//                 "mainFolder/subFolder1/subFolderFile1.json",
//                 "utf-8",
//                 (err, data) => {
//                   const fileData = JSON.parse(data);
//                   console.log("file data: ", fileData);
//                 }
//               );
//             }
//           }
//         );
//         const data = "Hello, this is a sample text file created using Node.js.";
//         fs.writeFile(
//           "mainFolder/subFolder1/subFolderFile2.txt",
//           data,
//           "utf-8",
//           (err) => {
//             console.log(
//               "folder subFolder1 created and data add into subFolderFile2.txt"
//             );
//             if (!err) {
//               fs.readFile(
//                 "mainFolder/subFolder1/subFolderFile2.txt",
//                 "utf-8",
//                 (err, data) => {
//                   if (err) {
//                     console.log("empty file");
//                   }
//                   console.log("file data: ", data);
//                 }
//               );
//             }
//           }
//         );
//       }
//     });
//     fs.mkdir("mainFolder/subFolder2", (err) => {
//       console.log("subfolder2 created");
//       if (!err) {
//         fs.writeFile(
//           "mainFolder/subFolder2/subFolderfile1.json",
//           '{"email":"abc@gmail.com"}',
//           "utf-8",
//           (err) => {
//             console.log(
//               "folder subFolder2 created and data add into subFolderfile1.json"
//             );
//             if (!err) {
//               fs.readFile(
//                 "mainFolder/subFolder2/subFolderfile1.json",
//                 "utf-8",
//                 (err, data) => {
//                   const fileData = JSON.parse(data);
//                   console.log("file data: ", fileData);
//                 }
//               );
//             }
//           }
//         );
//         const jsContent = `
//                             // This is a generated JavaScript file 
//                             // console.log('Hello, this is a programmatically created file!');`;
//         fs.writeFile(
//           "mainFolder/subFolder2/subFolderfile2.js",
//           jsContent,
//           "utf-8",
//           (err) => {
//             console.log(
//               "folder subFolder2 created and data add into subFolderfile2.js"
//             );
//             if (!err) {
//               fs.readFile(
//                 "mainFolder/subFolder2/subFolderfile2.js",
//                 "utf-8",
//                 (err, data) => {
//                   if (err) {
//                     console.log("empty dubfolder2.js");
//                   }
//                   const fileData = JSON.stringify(data);
//                   console.log("file data: ", fileData);
//                 }
//               );
//             }
//           }
//         );
//       }
//     });
//   }
// });


// fs.readFile("index.txt", 'utf8', (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }

//   // Count words: split by spaces, tabs, or newlines
//   const words = data.split(/\s+/); // \s+ matches one or more whitespace characters
//   const wordCount = words.filter(word => word).length; // Filter out empty strings

//   console.log(`The file contains ${wordCount} words.`);
//     // Count lines: split by newline character
//     const lines = data.split('\n');
//     const lineCount = lines.length;
  
//     console.log(`The file contains ${lineCount} lines.`);
// });



let count = 0;
const readStream = fs.createReadStream("index.txt","utf-8")
const writeStream = fs.createWriteStream("index4.txt","utf-8")
//chumk ois small part of big data

// readStream.on("data",(chunk)=>{
//   count++;
//   console.log(chunk,"chunk:--------------------------");
//   console.log(count,"count");
//   writeStream.write(chunk);
// })

// benefits of stream memory infficiency improve
// faster response time
// better scalibility for large data handling
//we can use pipe for control flow of stream

readStream.pipe(writeStream);
writeStream.on('finish',()=>{
console.log("data inserted successfully")
;})