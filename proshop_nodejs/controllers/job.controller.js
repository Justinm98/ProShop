const jobService = require('../services/job.service')

module.exports = {
    createJob,
    getJobs,
    deleteJob
};


function createJob(req, res, next) {

    jobService.addJob(req)
        .then((message) => res.json(message))
        .catch(err => next(err));

}

function getJobs(req,res,next){
    console.log('GetCourses()',req.body);
    jobService.getAllJobs(req).then(courses => {console.log('# of jobs sent:', courses.length);
        res.json(courses)}).catch(err => next(err));
}


function deleteJob(req,res,next){
    console.log('DeleteJob()',req.params);
    jobService.deleteJobListing(req.params.id).then(courses => {console.log('# of Courses sent:', courses.length);
        res.json(courses)}).catch(err => next(err));
}
