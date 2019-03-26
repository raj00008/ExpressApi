const express = require('express');
const router = express.Router();
const vehicleController = require('../app/api/controllers/vehicle-controller');

router.get('/', vehicleController.getAll);
router.post('/', vehicleController.create);
router.get('/:vehicleId', vehicleController.getById);
router.put('/:vehicleId', vehicleController.updateById);
router.delete('/:vehicleId', vehicleController.deleteById);

module.exports = router;