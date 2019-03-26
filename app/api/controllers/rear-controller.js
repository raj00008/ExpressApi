
const rearModel = require('../models/rear-model');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		rearModel.findById(req.params.rearId, function(err, rearInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "rear found!!!", data:{rear: rearInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let rearsList = [];

		rearModel.find({}, function(err, rears){
			if (err){
				next(err);
			} else{
				for (let rear of rears) {
					rearsList.push({id: rear._id,concealment:rear.concealment});
				}
				res.json({status:"success", message: "rear list found!!!", data:{rears: rearsList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		rearModel.findByIdAndUpdate(req.params.rearId,{concealment:req.body.concealment}, function(err, rearInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "rear updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		rearModel.findByIdAndRemove(req.params.rearId, function(err, rearInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "rear deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		rearModel.create({ concealment:req.body.concealment}, function (err, rearInfo) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "rear added successfully!!!", data: null});
				  
				});
	},

}					