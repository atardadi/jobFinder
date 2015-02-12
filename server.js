var express = require("express");
var jobModel = require("./models/Job");
var jobsData = require("./jobs-data.js");

var app = express();

app.set('views',__dirname);
app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req,res){
   jobsData.findJobs().then(function(collection){
      res.send(collection); 
   });
});

app.get('*',function(req,res) {
  res.render('index');
});

jobsData.connectDB('mongodb://atardadi:Popopo12@ds033601.mongolab.com:33601/jobfinder')
.then(function(){
    console.log('connected to mongodb!'); 
    jobsData.seedJobs();
});



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");