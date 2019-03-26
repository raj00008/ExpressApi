const express = require('express');
const router = express.Router();
const undercarriageController = require('../app/api/controllers/undercarriage-controller');

router.get('/', undercarriageController.getAll);
router.post('/', undercarriageController.create);
router.get('/:undercarriageId', undercarriageController.getById);
router.put('/:undercarriageId', undercarriageController.updateById);
router.delete('/:undercarriageId', undercarriageController.deleteById);

module.exports = router;