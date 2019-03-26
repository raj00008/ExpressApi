const express = require('express');
const router = express.Router();
const zoneController = require('../app/api/controllers/zone-controller');

router.get('/', zoneController.getAll);
router.post('/', zoneController.create);
router.get('/:zoneId', zoneController.getById);
router.put('/:zoneId', zoneController.updateById);
router.delete('/:zoneId', zoneController.deleteById);

module.exports = router;