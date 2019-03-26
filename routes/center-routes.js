const express = require('express');
const router = express.Router();
const centerController = require('../app/api/controllers/center-controller');

router.get('/', centerController.getAll);
router.post('/', centerController.create);
router.get('/:centerId', centerController.getById);
router.put('/:centerId', centerController.updateById);
router.delete('/:centerId', centerController.deleteById);

module.exports = router;