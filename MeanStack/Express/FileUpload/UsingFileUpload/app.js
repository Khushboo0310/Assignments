var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileupload = require('express-fileupload')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(fileupload());  //middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/',function(req,res){
  return res.sendFile('Home.html',{root:__dirname})
});

app.post('/upload',function(req,res){
  if(Object.keys(req.files).length==0){   //check & iterate through the object keys
     return res.send("No files were uploaded!")
  }

  //get the files
  let theUploadedFile = req.files.fileUploader;
  console.log(theUploadedFile);


  //use mv() for saving the file
  theUploadedFile.mv(path.join(__dirname+"/Alluploads",theUploadedFile.name),function(err){
    if(err){return res.status(500).send(err);}
  
      res.send('File Uploaded!');
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
