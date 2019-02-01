var fs = require('fs');
var readable = fs.createReadStream('input.txt');
var writable = fs.createWriteStream('output.txt');
readable.setEncoding("UTF-8");
// var AllData = "";

// readable.on('data',function(chunks){
//     AllData+=chunks;
// });

// readable.on('end',function(){
//     writable.write(AllData);
//     writable.end();
// });

readable.pipe(writable);