const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();
const authenticateUser = require('../middlewares/authMiddleware');

// Example controller functions (replace with your actual controllers)

// Get user account
router.get('/getUser', authenticateUser, userController.getUserById);

// Update user account
router.put('/updateUser', authenticateUser,userController.updateUser);

// Delete user account
router.delete('/deleteUser', authenticateUser, userController.deleteUser);

//reset password
router.post('/resetPassword', authenticateUser, userController.resetPassword);

module.exports = router;  