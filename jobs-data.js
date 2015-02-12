var mongoose = require("mongoose");
var Promise = require("bluebird");

var Job = mongoose.model('Job');


var findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
};

var jobs = [
            {title:'Cook', description: 'Cooking'},
            {title:'Fish', description: 'Fishing'},
            {title:'Dog', description: 'Dogging'}
    ];

exports.connectDB = Promise.promisify(mongoose.connect,mongoose);

var createJob = Promise.promisify(Job.create,Job);

exports.findJobs = findJobs;
exports.seedJobs = function() {
    return findJobs({}).then(function(collection){
        if (collection.length === 0) {
            return Promise.map(jobs,function(job){
                return createJob(job);
            });
        }
    });
};

