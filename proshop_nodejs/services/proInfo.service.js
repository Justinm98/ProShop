const db = require('../_helpers/database');
const mongoose = require("mongoose");
const ProInfo = db.ProInfo;


module.exports = {
    registerProInfo,
    getProInfo
}

async function registerProInfo(req){
    console.log(req.body);
    const proInfo = new ProInfo(req.body);
    return await proInfo.save;
}

async function getProInfo(req){
    return await ProInfo.findOne({'_id': mongoose.Types.ObjectId(req.params.id)});
}
