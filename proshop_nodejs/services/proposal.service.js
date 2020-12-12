const db = require('../_helpers/database');
const mongoose = require("mongoose");
const Proposal = db.Proposal;
const Job = db.Job;

module.exports = {
    getAllProposals,
    deleteProposal,
    add,
    select,
    getProposalByJobID
}


async function getAllProposals() {

    return await Proposal.find().populate({path:'createdBy',select:'username'});
}

async function getProposalByJobID(req){
    console.log(req.params.id);
    return await Proposal.find({'job': mongoose.Types.ObjectId(req.params.id)});
}

async function deleteProposal(id) {
     return await Proposal.deleteOne({"_id":id});
}

async function add(req) {

    let proposal = req.body;

    // validate
    if (await Proposal.findOne({ title: proposal.title, cost: proposal.cost  })) {
        throw 'Job "' + proposal.job + proposal.cost +'" already exists';
    }
    else if(!req.user.sub){
        throw 'Error with the user submitting request. User information missing. Malformed request.';
    }
    console.log(proposal.job);
    const job = await Job.findOne({'_id': mongoose.Types.ObjectId(proposal.job)});
    console.log(job);
    job.proposals.push(proposal._id);
    await job.save();

    //populate missing fields in the course object
    proposal.createdBy = req.user.sub;
    proposal.createdDate =  Date.now();

    proposal = new Proposal(proposal);

    console.log(proposal);
    // save user
    await proposal.save();
}

async function select(req) {
    return await Proposal.updateOne({'_id': mongoose.Types.ObjectId(req.body.id)}, {$set: {chosen: true}});
}
