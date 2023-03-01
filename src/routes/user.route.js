const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../Middleware/verifyToken');
const verifyAdmin = require('../Middleware/verifyAdmin');
router.get('/users', userController.getUsers);
router.get('/user/', verifyToken,verifyAdmin, userController.getOneUser );
router.get('/user/me', verifyToken, userController.GetAuthUser)

router.put('/users', verifyToken, userController.updateUser);

router.delete('/users/:id', userController.deleteOnUser );

module.exports = router;