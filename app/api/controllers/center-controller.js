
const centerModel = require('../models/center-model');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		centerModel.findById(req.params.centerId, function(err, centerInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "center found!!!", data:{center: centerInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let centersList = [];

		centerModel.find({}, function(err, centers){
			if (err){
				next(err);
			} else{
				for (let center of centers) {
					centersList.push({id: center._id,concealment:center.concealment});
				}
				res.json({status:"success", message: "center list found!!!", data:{centers: centersList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		centerModel.findByIdAndUpdate(req.params.centerId,{concealment:req.body.concealment}, function(err, centerInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "center updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		centerModel.findByIdAndRemove(req.params.centerId, function(err, centerInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "center deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		centerModel.create({ concealment:req.body.concealment}, function (err, centerInfo) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "center added successfully!!!", data: null});
				  
				});
	},

}					