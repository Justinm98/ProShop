const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
        links: [{ type: String, unique: true, required: true }],
        personalDes: { type: String, unique: true, required: true },
        skills: [{ type: String, required: true }],
        otherSkill: { type: String, required: true },
        proUser: { type: Schema.Types.ObjectId, ref: 'User'},
        createdDate: { type: Date, default: Date.now }
    }
);

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('ProInformation', schema);
