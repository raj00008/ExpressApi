const Concealment =require('../models/concealment-model')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const frontSchema = new Schema({
    id: { type: Number, require:true, unique: true },
    concealment:{type:mongoose.Schema.Types.ObjectId,ref:'Concealment'}
});

const Front = mongoose.model('Front', frontSchema);
module.exports = Front;