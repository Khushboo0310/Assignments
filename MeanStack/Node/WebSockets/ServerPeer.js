var socket = require('socket.io');
var http = require('http');
var fs = require('fs');


var server = http.createServer((req,res)=>{
    fs.readFile(__dirname+"/ClientPeer.html",(err,data)=>{
        if(!err){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data);
        }
    });
});

server.listen(5000,'localhost',()=>{
    console.log("Server running at 5000!")
});

var io = socket.listen(server);
io.sockets.on("connection",(skt)=>{
    setInterval(function(){
        var dataToBeSent = new Date();
        console.log("Emmmitting data for client..");
        skt.emit('messageForClient',dataToBeSent);
    },2000);

    skt.on('messageFromClient',(dataFromClient)=>{
        console.log(`Data Received : ${dataFromClient}`);
    });
});