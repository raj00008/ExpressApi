
const undercarriageModel = require('../models/undercarriage-model');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		undercarriageModel.findById(req.params.undercarriageId, function(err, undercarriageInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "undercarriage found!!!", data:{undercarriage: undercarriageInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let undercarriagesList = [];

		undercarriageModel.find({}, function(err, undercarriages){
			if (err){
				next(err);
			} else{
				for (let undercarriage of undercarriages) {
					undercarriagesList.push({id: undercarriage._id,concealment:undercarriage.concealment});
				}
				res.json({status:"success", message: "undercarriage list found!!!", data:{undercarriages: undercarriagesList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		undercarriageModel.findByIdAndUpdate(req.params.undercarriageId,{concealment:req.body.concealment}, function(err, undercarriageInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "undercarriage updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		undercarriageModel.findByIdAndRemove(req.params.undercarriageId, function(err, undercarriageInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "undercarriage deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		undercarriageModel.create({ concealment:req.body.concealment}, function (err, undercarriageInfo) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "undercarriage added successfully!!!", data: null});
				  
				});
	},

}					