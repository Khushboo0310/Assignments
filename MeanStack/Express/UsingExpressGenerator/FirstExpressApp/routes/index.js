var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products',function(req,res,next){
  var allProducts =[
    {name:'Mobile',price:20000},
    {name:'TV',price:20000},
    {name:'Laptop',price:20000}
  ];
  res.render('products',{allProducts:allProducts})
});

module.exports = router;
