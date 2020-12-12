var express = require('express');
var router = express.Router();
const proposalController = require('../controllers/proposal.controller');
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');

router.get('/getAllProposals', proposalController.getProposals);
router.get('/getProposalsByJobID', proposalController.getProposalByJobID);
router.post('/create', proposalController.createProposal);
router.post('/select', proposalController.selectProposal);
router.delete('/remove', proposalController.removeProposal);



module.exports = router;
