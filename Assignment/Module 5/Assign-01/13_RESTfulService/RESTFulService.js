//Express is required for creating Node.js based web apps
var express = require('express');

//body-parser is used to parse the Request body and populate the req.
var bodyParser = require('body-parser');

// Create Express app
var app = express();

// Setting port no for listening
app.set('port', 9876);
app.use(bodyParser.json());

// To allow CORS - Cross Origin Resrouce Sharing 
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});

//RESTful Methods / APIs

app.get('/', function (req, res) {
    res.send('<h1>RESTFul Service using Express!</h1>');
});

app.post("/login", function (req, res) {    
    var data="";
    console.log("Getting User credentials: " +
        JSON.stringify(req.body));

    var name = req.body.name.toLowerCase();
    var pwd = req.body.pwd;    

    if (name == "administrator" && pwd == "abcd") {
        data = "You are logged in as Administrator!";
    }
    else {
        data = "You are not logged in as Administrator!";
    }    
    res.send(JSON.stringify(data));
});


