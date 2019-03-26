const Front =require('../models/front-model')
const Rear =require('../models/rear-model')
const Center =require('../models/center-model')
const Undercarriage =require('../models/undercarriage-model')



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const zoneSchema = new Schema({
    id: { type: Number, require:true, unique: true },
    front: {type:mongoose.Schema.Types.ObjectId,ref:"Front"},
    rear: {type:mongoose.Schema.Types.ObjectId,ref:"Rear"},
    center:{type:mongoose.Schema.Types.ObjectId,ref:"Center"},
    undercarriage:{type:mongoose.Schema.Types.ObjectId,ref:"Undercarriage"}
});

const Zone = mongoose.model('Zone', zoneSchema);
module.exports = Zone;