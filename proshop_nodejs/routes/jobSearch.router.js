var express = require('express');
var router = express.Router();
const jobSearchController = require('../controllers/jobSearch.controller');

router.get('/search/:searchQuery', jobSearchController.findJobs);
router.post('/search', jobSearchController.findRecommendedJobs);

module.exports = router;
