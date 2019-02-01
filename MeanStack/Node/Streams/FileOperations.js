var fs = require('fs');

fs.mkdir('temp',function(err){
    if(err){console.log("Error : "+ err);}
    else{
        fs.exists('temp',function(e){
            if(e){
                process.chdir('temp');
                fs.writeFile('test.txt','This file is written with the help of writeFile method,',function(err){
                    if(err){console.log("Error : "+err);}
                    else{
                        fs.readFile('test.txt',function(err,data){
                            if(err){console.log("Error : "+err);}
                            else{console.log(data.toString());}
                        });
                    }
                });
            }
            else{console.log("temp already exists!");}
        });
    }
});
console.log("End of the program.");