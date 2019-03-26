const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const concealmentSchema = new Schema({
    id: { type: Number, require:true, unique: true },
    title: {type:String,required:true},
    description: {type:String,required:true},
    src:[{type:String,required:true}],
    location:{type:String,required:true},
    date:{type:Date,required:true},
    userId:{type:String,required:true},
    referenceNo:{type:Number,required:true},
    countFound:{type:Number,required:true},
    discovered:[{
                location:{type:String,required:true},
                userId:{type:String,required:true},
                referenceNo:{type:Number,required:true},
                }]
});

const Concealment = mongoose.model('Concealment', concealmentSchema);
module.exports = Concealment;