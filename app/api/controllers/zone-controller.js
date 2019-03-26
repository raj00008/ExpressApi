
const zoneModel = require('../models/zone-model');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		zoneModel.findById(req.params.zoneId, function(err, zoneInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "zone found!!!", data:{zone: zoneInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let zonesList = [];

		zoneModel.find({}, function(err, zones){
			if (err){
				next(err);
			} else{
				for (let zone of zones) {
					zonesList.push({id: zone._id, front: zone.front, rear: zone.rear,center:zone.center,udercarriage:zone.udercarriage});
				}
				res.json({status:"success", message: "zone list found!!!", data:{zones: zonesList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		zoneModel.findByIdAndUpdate(req.params.zoneId,{front:req.body.front,rear:req.body.rear,center:req.body.center,udercarriage:req.body.undercarriage}, function(err, zoneInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "zone updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		zoneModel.findByIdAndRemove(req.params.zoneId, function(err, zoneInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "zone deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		zoneModel.create({front:req.body.front,rear:req.body.rear,center:req.body.center,udercarriage:req.body.undercarriage}, function (err, zoneInfo) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "zone added successfully!!!", data: null});
				  
				});
	},

}					