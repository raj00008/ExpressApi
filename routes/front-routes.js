const express = require('express');
const router = express.Router();
const frontController = require('../app/api/controllers/front-controller');

router.get('/', frontController.getAll);
router.post('/', frontController.create);
router.get('/:frontId', frontController.getById);
router.put('/:frontId', frontController.updateById);
router.delete('/:frontId', frontController.deleteById);

module.exports = router;