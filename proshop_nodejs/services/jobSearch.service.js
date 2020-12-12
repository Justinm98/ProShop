const db = require('../_helpers/database');
const mongoose = require("mongoose");
const User = db.User;
const Job = db.Job;


module.exports = {
    findJobs,
    findRecommendedJobs
}

async function findJobs(searchQuery){
    let jobsArr = await Job.find({});
    const results = jobsArr.filter(job => (job.description.includes(searchQuery) || job.title.includes(searchQuery)));
    console.log(results);
    return results;
}

async function findRecommendedJobs(req){

    let userSkills = req.body.skills;
    console.log(userSkills);
    //const intersection = array1.filter(element => array2.includes(element));
    let jobsArr = await Job.find({});
    const validJobs = [];
    for(let i = 0; i < jobsArr.length; i++){
        let jobSkill = jobsArr[i].skillCategory;
        if(userSkills.includes(jobSkill)){
            validJobs.push(jobsArr[i]);
        }

    }
    console.log(validJobs);
    return validJobs;
}
