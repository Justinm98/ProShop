const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//https://mongoosejs.com/docs/populate.html#populate_an_existing_mongoose_document

const schema = new Schema({
    createdByUser: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true, default: 'No Title'},
    budget: { type: String, required: true, default: '$0'},
    description: { type: String, required: true, default:"No description set" },
    createdDate: { type: Date, default: Date.now },
    completionDate: { type: Date, required: false },
    skillCategory: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Job', schema);
