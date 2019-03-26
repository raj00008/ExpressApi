const express = require('express');
const router = express.Router();
const concealmentController = require('../app/api/controllers/concealment-controller');

router.get('/', concealmentController.getAll);
router.post('/', concealmentController.create);
router.get('/:concealmentId', concealmentController.getById);
router.put('/:concealmentId', concealmentController.updateById);
router.delete('/:concealmentId', concealmentController.deleteById);

module.exports = router;