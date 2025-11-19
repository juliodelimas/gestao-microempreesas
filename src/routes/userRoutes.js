const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


const authMiddleware = require('../middleware/auth');

router.post('/', userController.register); // público
router.get('/', authMiddleware, userController.getAll); // protegido

module.exports = router;