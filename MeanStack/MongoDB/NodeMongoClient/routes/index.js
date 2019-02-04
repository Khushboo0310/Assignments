var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/employees',(req,res)=>{
  //connect to MongoDB
  var url = "mongodb://localhost:27017";


  //use MongoClient ---> pkg mongodb
  var MongoClient = mongodb.MongoClient;
  MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
    if(err){console.log(err);}
    else{
      var collection = db.db('employees').collection('employees');      //get the records
      //select * from employees
      collection.find({}).toArray((err,result)=>{   //everything is selected
        if(err){console.log(err);}
        else if(result.length){
          res.render('employees',{allemployees:result});       //pass the collection to view to render!!!!
        }
      });//eof toArray
    }
  });

  
});

module.exports = router;
