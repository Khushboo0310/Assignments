var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.sendFile('Signup.html',{root:__dirname+"/../"});
});

//post request from the form details
router.post('/details',function(req,res,next){
  // res.send("hello");
  var obj = {FirstName : req.body.first,LastName : req.body.last, DOB : req.body.dob, Email : req.body.email, Mobile : req.body.mobile};
  var url = "mongodb://localhost:27017/";
  
  //Connecting with MongoDB
  MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
    if(err){ return console.log(err);}
    else{
      var collection = db.db('signup').collection('signup');
      collection.insertOne(obj,(err,res)=>{
        if(err){console.log(err);}
        else{console.log("1 record inserted!")}
        
      });
    }
  });
  res.send("<h1>Record inserted successfully!</h1>");
});
module.exports = router;
