const express = require('express');
const router = express.Router();
const rearController = require('../app/api/controllers/rear-controller');

router.get('/', rearController.getAll);
router.post('/', rearController.create);
router.get('/:rearId', rearController.getById);
router.put('/:rearId', rearController.updateById);
router.delete('/:rearId', rearController.deleteById);

module.exports = router;