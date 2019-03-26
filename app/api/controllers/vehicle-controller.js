
const vehicleModel = require('../models/vehicle-model');					
const zoneModel=require('../models/zone-model');
const concealmentModel=require('../models/concealment-model');
const frontModel=require('../models/front-model');
const centerModel=require('../models/center-model');
const rearModel=require('../models/rear-model');
const undercarriageModel=require('../models/undercarriage-model');

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		vehicleModel.findById(req.params.vehicleId, function(err, vehicleInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "vehicle found!!!", data:{vehicle: vehicleInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let vehiclesList = [];

		vehicleModel.find({}, function(err, vehicles){
			if (err){
				next(err);
			} else{
				for (let vehicle of vehicles) {
					vehiclesList.push({id: vehicle._id, make: vehicle.make, model: vehicle.model,year:vehicle.year, zone:vehicle.zone});
				}
				res.json({status:"success", message: "vehicle list found!!!", data:{vehicles: vehiclesList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		vehicleModel.findByIdAndUpdate(req.params.vehicleId,{make:req.body.make,model:req.body.model,year:req.body.year,zone:req.body.zone}, function(err, vehicleInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "vehicle updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		vehicleModel.findByIdAndRemove(req.params.vehicleId, function(err, vehicleInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "vehicle deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {

		var concealmentfront = new concealmentModel();
		var concealmentrear = new concealmentModel();
		var concealmentcenter = new concealmentModel();
		var concealmentundercarriage = new concealmentModel();

		var zone = new zoneModel({
			front:front._id,
			center:center._id,
			rear:rear._id,
			undercarriage:undercarriage._id,
		});
		var  front = new frontModel({concealment
		:concealmentfront});
		var rear = new rearModel({concealment
			:concealmentrear});
		var center = new centerModel({concealment
			:concealmentcenter});
		var undercarriage = new undercarriageModel({concealment
			:concealmentundercarriage});
		
	

		vehicleModel.create({make:req.body.make,model:req.body.model,year:req.body.year}, function (err, vehicleInfo) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "vehicle added successfully!!!", data: null});
				  
				});
				v
	},

}					