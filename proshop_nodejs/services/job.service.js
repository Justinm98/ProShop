

const db = require('../_helpers/database');
const mongoose = require("mongoose");
const User = db.User;
const Job = db.Job;
const Proposal = db.Proposal;


module.exports = {
    getAllJobs,
    deleteJobListing,
    addJob
}


//TODO: here you provide a list of attendances for a given course ID.
// Remember that on the Angular side the component wants to display  'username', 'firstName', 'lastName', 'attendanceRate', 'id'. Hint: use Mongoose's .populate({path:'...', select:'field1 field2 field3'});
async function getAllJobs(req) {
    results = await Job.find().populate({path:'createdByUser',select:'username firstName lastName'});
    console.log(results);
    return results;
}

//TODO (optional/bonus): delete an attendance object. The req object will contain the id of the attendance object.
async function deleteJobListing(id) {
    console.log(id);
    await Proposal.deleteMany({job:id});
    return await Job.deleteOne({_id:id});
}

// TODO: here you need to process professor requests to create new attendance objects.
//  Hint: you can retrieve professor's ObjectId via 'req.user.sub' and use it to fill the missing field in the request body.
async function addJob(req) {
    let jobInfo = req.body;

    const job = new Job({
        createdByUser: req.user.sub,
        title: jobInfo.title,
        budget: jobInfo.budget,
        description: jobInfo.description,
        createdDate: new Date(),
        completionDate: jobInfo.completionDate,
        skillCategory: jobInfo.skillCategory,
        proposals: []
    });

    return await job.save();
}
