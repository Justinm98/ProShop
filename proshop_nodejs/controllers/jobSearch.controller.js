const jobSearchService = require('../services/jobSearch.service')

module.exports = {
    findJobs,
    findRecommendedJobs
};


function findJobs(req, res, next) {
    console.log("searching with param: " + req.params.searchQuery);
    jobSearchService.findJobs(req.params.searchQuery)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function findRecommendedJobs(req, res, next){
    jobSearchService.findRecommendedJobs(req)
        .then((data) => res.json(data))
        .catch(err => next(err));
}
