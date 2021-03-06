var express = require('express');
var router = express.Router();
const jobController = require('../controllers/job.controller');
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');

router.post('/createjob', jobController.createJob);
router.get('/getjobs', jobController.getJobs);
router.delete('/:id', jobController.deleteJob);

module.exports = router;
