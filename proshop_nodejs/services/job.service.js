

const db = require('../_helpers/database');
const mongoose = require("mongoose");
const User = db.User;
const Job = db.Job;


module.exports = {
    getAllJobs,
    deleteJobListing,
    addJob
}


//TODO: here you provide a list of attendances for a given course ID.
// Remember that on the Angular side the component wants to display  'username', 'firstName', 'lastName', 'attendanceRate', 'id'. Hint: use Mongoose's .populate({path:'...', select:'field1 field2 field3'});
async function getAllJobs(req) {
    let jobs = await Job.find({});

    return jobs;
}

//TODO (optional/bonus): delete an attendance object. The req object will contain the id of the attendance object.
async function deleteJobListing(req) {
    return await User.deleteOne({_id:req.body._id});
}

// TODO: here you need to process professor requests to create new attendance objects.
//  Hint: you can retrieve professor's ObjectId via 'req.user.sub' and use it to fill the missing field in the request body.
async function addJob(req) {
    let jobInfo = req.body;

    const job = new Job({
        createdByUser: req.user.sub,
        budget: jobInfo.budget,
        jobDescription:jobInfo.jobDescription,
        createdDate: new Date(jobInfo.startTime),
        deadlineDate: jobInfo.deadlineDate
    });

    return await job.save();
}
