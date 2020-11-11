const proposalService = require('../services/proposal.service')

module.exports = {
    createProposal,
    selectProposal,
    removeProposal,
    getProposals
};


function createProposal(req, res, next) {
    console.log('createProposal()',req.body);
    //TODO: handle requests that create new attendance objects.
    proposalService.add(req)
        .then((message) => res.json(message))
        .catch(err => next(err));
}

function selectProposal(req,res,next){
    console.log('selectProposal()',req.body);
    //TODO: handle students requests for tracking their attendance via accessCode.
    proposalService.select(req)
        .then((message) => res.json(message))
        .catch(err => next(err));
}


//TODO (optional/bonus): handle requests for deleting attendance objects.
function removeProposal(req,res,next){
    console.log('deleteProposal()',req.body);
    proposalService.deleteProposal(req.params.id)
        .then((message) => res.json(message))
        .catch(err => next(err));

}


//TODO: here you handle professors request to retrieve a list of attendances for a given course.
function getProposals(req,res,next){
    console.log('getProposals()',req.body);
    proposalService.getAllProposals(req).then(attendances => {console.log('# of attendances sent:', attendances.length);
        res.json(attendances)}).catch(err => next(err));
}

