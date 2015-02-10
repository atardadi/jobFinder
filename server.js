var express = require("express");
var mongoose = require("mongoose");
var jobModel = require("./models/Job");

var app = express();

app.set('views',__dirname);
app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req,res){
   mongoose.model('Job').find({}).exec(function(error,collection){
     res.send(collection);  
   }) 
});

app.get('*',function(req,res) {
  res.render('index');
  
});

mongoose.connect('mongodb://atardadi:Popopo12@ds033601.mongolab.com:33601/jobfinder');

var con = mongoose.connection;

con.once('open', function() {
   console.log('connected to mongodb!'); 
   jobModel.seedJobs();
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");