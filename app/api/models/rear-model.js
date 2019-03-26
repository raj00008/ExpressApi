const Concealment =require('../models/concealment-model')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rearSchema = new Schema({
    id: { type: Number, require:true, unique: true },
    concealment:{type:mongoose.Schema.Types.ObjectId,ref:"Concealment"}
});

const Rear = mongoose.model('Rear', rearSchema);
module.exports = Rear;