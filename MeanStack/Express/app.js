var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

app.get("/",(req,res)=>{
    // res.send("<h1>Welcome to the Express!</h1>");
    res.sendFile("index.html",{root:__dirname});
     //res.json([{name:"React"}])
});

app.use(bodyParser.json());

app.post('/login',function(req,res){
    console.log(req.body.name); 
    console.log(req.body.pass);
    res.send("Success!");
})

app.listen(port,()=>console.log("Server running at : "+port));