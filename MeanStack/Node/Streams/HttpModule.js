var http = require('http');
var port = 5000;

// var server = http.createServer(function(req,res){
//     console.log(req.method);
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/html");
//     res.end("<h1>Hi Khushboo from the Node.js server!</h1>");
// });

var fs = require('fs');

var server = http.createServer(function(req,res){
    fs.readFile(__dirname+"/index.html",function(err,data){
        if(err){console.log(err)}
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        }
    });
});


server.listen(port,"127.0.0.1",()=>console.log(`Server is running at the port : ${port}`));