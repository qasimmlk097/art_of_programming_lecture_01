//console.log is a global module
//fs is a core module but not global

const fs = require('fs');

fs.writeFileSync("Hello.txt","code By Qasim");


//to find the directory name 
console.log("this is the directory"+ __dirname);
//to get the file name 
console.log('this is the file name'+ __filename);