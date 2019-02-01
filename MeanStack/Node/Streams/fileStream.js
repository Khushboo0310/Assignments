var fs = require("fs");


//Async version of file reading

// fs.readFile('data.txt',function(err,fileData){
//     if(err){console.log("Erroe found : "+err);}
//     else{console.log("Reading file Async : "+fileData.toString());}
// });


//Sync version of file reading
var content = fs.readFileSync('data.txt','UTF-8');
console.log(content.toString()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              );


//Proof of the Async functionality
console.log("Program ended!!");