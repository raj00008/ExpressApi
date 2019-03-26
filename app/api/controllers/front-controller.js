
const frontModel = require('../models/front-model');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		frontModel.findById(req.params.frontId, function(err, frontInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "front found!!!", data:{front: frontInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let frontsList = [];

		frontModel.find({}, function(err, fronts){
			if (err){
				next(err);
			} else{
				for (let front of fronts) {
					frontsList.push({id: front._id,concealment:front.concealment});
				}
				res.json({status:"success", message: "front list found!!!", data:{fronts: frontsList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		frontModel.findByIdAndUpdate(req.params.frontId,{concealment:req.body.concealment}, function(err, frontInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "front updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		frontModel.findByIdAndRemove(req.params.frontId, function(err, frontInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "front deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		frontModel.create({ concealment:req.body.concealment}, function (err, frontInfo) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "front added successfully!!!", data: null});
				  
				});
	},

}					