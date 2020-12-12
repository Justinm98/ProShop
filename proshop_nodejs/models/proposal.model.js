const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//https://mongoosejs.com/docs/populate.html#populate_an_existing_mongoose_document

const schema = new Schema({
    //TODO: need to define the following in this schema:
    // -'prof' -- the author of the attendance tracker),
    createdByPro: { type: Schema.Types.ObjectId, ref: 'User' },
    job: { type: Schema.Types.ObjectId, ref: 'Job' },
    cost: { type: String, required: true, default: '$0' },
    duration: {type: String, required: true, default: '1 week'},
    chosen: {type: Boolean, default: false},
    dateCreated: {type: Date, default: Date.now()},
    writeup: {type: String, required: false, default: ''},
    title: {type: String, required: true, default: ''}

});

//this makes startTime and course object id unique because it makes no sense to have two identical attendance tracker documents.
//schema.index({startTime:1, course:1}, { unique: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Proposal', schema);
