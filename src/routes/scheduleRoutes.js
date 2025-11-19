const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.post('/', scheduleController.create);
router.get('/', scheduleController.list);
router.patch('/:id/status', scheduleController.updateStatus);

module.exports = router;