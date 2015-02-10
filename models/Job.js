var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
   title:{type:String},
   description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function() {
  Job.find({}).exec(function(error,collection){
      if (collection.length === 0) {
          Job.create({title:'Cook', description: 'Cooking'});
          Job.create({title:'Fish', description: 'Fishing'});
          Job.create({title:'Dog', description: 'Dogging'});
      }
  })  
};