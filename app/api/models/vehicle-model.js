const Zone =require('../models/zone-model')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vehicleSchema = new Schema({
    id: { type: Number, require:true, unique: true },
    make: {type:String,trim:true},
    model: {type:String,trim:true},
    year:{type:Date,trim:true},
    zone:{type:mongoose.Schema.Types.ObjectId,ref:"Zone"}
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;