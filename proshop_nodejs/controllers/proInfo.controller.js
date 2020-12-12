const proInfoService = require('../services/proInfo.service');


module.exports = {
    registerProInfo,
    getProInfo,
    updateProInfo
}

function registerProInfo(req, res, next){
    proInfoService.registerProInfo(req)
        .then((mess) => res.json(mess))
        .catch(err => next(err));
}

function getProInfo(req, res, next){
    console.log(req.params);
    proInfoService.getProInfo(req)
        .then((data) => res.json(data))
        .catch(err => next(err));
}

function updateProInfo(req, res, next){
    proInfoService.updateProInfo(req)
        .then((data) => res.json(data))
        .catch(err => next(err));
}
