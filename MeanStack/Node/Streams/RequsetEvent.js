var request  = require('request');
var fs = require('fs');
var src = request('http://www.google.com'); //returns as object of event emitter
var response = "";
src.on('data',function(chunks){
    //console.log("\n\n-----------------------DATA-----------------\n\n");
    response +=chunks.toString();
});

src.on('end',function(){
    console.log("\n\n-----------DONE----------------\n\n");
    fs.writeFile('Google.html',response,function(err){
        if(err){console.log("Error"+err);}
        else{console.log("Done with the file writting");}
    })
});   