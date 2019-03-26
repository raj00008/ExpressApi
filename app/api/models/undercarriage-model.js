const Concealment =require('../models/concealment-model')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const undercarriageSchema = new Schema({
    id: { type: Number, require:true, unique: true },
    concealment:{type:mongoose.Schema.Types.ObjectId,ref:"Concealment"}
});

const Undercarriage = mongoose.model('Undercarriage', undercarriageSchema);
module.exports = Undercarriage;