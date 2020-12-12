const db = require('../_helpers/database');
const mongoose = require("mongoose");
const ProInfo = db.ProInfo;


module.exports = {
    registerProInfo,
    getProInfo,
    updateProInfo
}

async function registerProInfo(req){
    console.log(req.body);
    const proInfo = new ProInfo(req.body);
    console.log(proInfo);
    await proInfo.save();
}

async function getProInfo(req){
    const data = await ProInfo.findOne({'proUser': mongoose.Types.ObjectId(req.params.id)});
    return data;
}

async function updateProInfo(req){
    let data = await ProInfo.findOne({'proUser': mongoose.Types.ObjectId(req.body.proUser)});
    data.links = req.body.links;
    data.personalDes = req.body.personalDes;
    data.skills = req.body.skills;
    data.otherSkill = req.body.otherSkill;
    await data.save();
    return data;
}
