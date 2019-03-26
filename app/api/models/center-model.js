const Concealment =require('../models/concealment-model')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const centerSchema = new Schema({
    id: { type: Number, require:true, unique: true },
    concealment:{type:mongoose.Schema.Types.ObjectId,ref:'Concealment'}
});

const Center = mongoose.model('Center', centerSchema);
module.exports = Center;