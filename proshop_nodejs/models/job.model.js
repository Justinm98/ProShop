const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//https://mongoosejs.com/docs/populate.html#populate_an_existing_mongoose_document

const schema = new Schema({
    createdByUser: { type: Schema.Types.ObjectId, ref: 'User' },
    budget: { type: String, required: true, default: '$0'},
    jobDescription: { type: String, required: true, default:"No description set" },
    createdDate: { type: Date, default: Date.now },
    deadlineDate: { type: Date, required: false }
});

schema.index({courseNumber:1, courseDeptCode:1}, { unique: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Job', schema);
