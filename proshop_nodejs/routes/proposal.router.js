var express = require('express');
var router = express.Router();
const proposalController = require('../controllers/proposal.controller');
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');

router.get('/getAllProposals', proposalController.getProposals);
router.get('/getProposalsByJobID:id', proposalController.getProposalByJobID);
router.post('/create', proposalController.createProposal);
router.post('/select', proposalController.selectProposal);
router.delete('/:id', proposalController.removeProposal);
router.get('/getProposalsByProID/:id', proposalController.getProposalsByProID);

module.exports = router;
