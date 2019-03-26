
const concealmentModel = require('../models/concealment-model');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		concealmentModel.findById(req.params.concealmentId, function(err, concealmentInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "Concealment found!!!", data:{concealment: concealmentInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let concealmentsList = [];

		concealmentModel.find({}, function(err, concealments){
			if (err){
				next(err);
			} else{
				for (let concealment of concealments) {
					concealmentsList.push({id: concealment._id, title: concealment.title, description: concealment.description,src:concealment.src,location:concealment.location,date:concealment.date,userId:concealment.userId,referenceNo:concealment.referenceNo});
				}
				res.json({status:"success", message: "Concealment list found!!!", data:{concealments: concealmentsList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		concealmentModel.findByIdAndUpdate(req.params.concealmentId,{title: req.body.title, description: req.body.description,src:req.body.src,location:req.body.location,date:req.body.date,userId:req.body.userId,referenceNo:req.body.referenceNo}, function(err, concealmentInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Concealment updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		concealmentModel.findByIdAndRemove(req.params.concealmentId, function(err, concealmentInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Concealment deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		concealmentModel.create({ title: req.body.title, description: req.body.description,src:req.body.src,location:req.body.location,date:req.body.date,userId:req.body.userId,referenceNo:req.body.referenceNo}, function (err, concealmentInfo) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "Concealment added successfully!!!", data: null});
				  
				});
	},

}					