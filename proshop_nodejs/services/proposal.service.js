const db = require('../_helpers/database');
const mongoose = require("mongoose");
const Proposal = db.Proposal;


module.exports = {
    getAllProposals,
    deleteProposal,
    add,
    select
}


async function getAllProposals() {

    return await Proposal.find().populate({path:'createdBy',select:'username'});
}



async function deleteProposal(id) {
     return await Proposal.deleteOne({"_id":id});
}

async function add(req) {

    let proposal = req.body;

    // validate
    if (await Proposal.findOne({ job: proposal.job, cost: proposal.cost  })) {
        throw 'Job "' + proposal.job + proposal.cost +'" already exists';
    }
    else if(!req.user.sub){
        throw 'Error with the user submitting request. User information missing. Malformed request.';
    }
    //populate missing fields in the course object
    proposal.createdBy = req.user.sub;
    proposal.createdDate =  Date.now();

    proposal = new Proposal(proposal);


    // save user
    await proposal.save();
}

async function select(req) {
    let proposal = await Proposal.find({'_id': mongoose.Types.ObjectId(req.body.id)});
    proposal.chosen = true;

    return await proposal.save();
}
