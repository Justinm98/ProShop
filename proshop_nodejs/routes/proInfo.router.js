var express = require('express');
var router = express.Router();
const proInfoController = require('../controllers/proInfo.controller');

router.post('/registerProInfo', proInfoController.registerProInfo);
router.get('/getProInfo/:id', proInfoController.getProInfo)
module.exports = router;
