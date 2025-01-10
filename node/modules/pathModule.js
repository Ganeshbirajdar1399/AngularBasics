const path= require("path");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.basename("E:/Angular-Projects-Github/ClassAngular/AngularBasics/node/pathModule.js"))
console.log(path.extname("E:/Angular-Projects-Github/ClassAngular/AngularBasics/node/pathModule.js"))
console.log(path.isAbsolute("node/pathModule.js"));
console.log(path.join(__dirname,"/demo"));