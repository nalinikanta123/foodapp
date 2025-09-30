const User = require('../models/userModel');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Update a user
exports.updateUser = async (req, res) => {
  try {
    console.log(req.body);
    if(req.body === undefined || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'No data provided for update' });
    }
    const user = await User.findByIdAndUpdate(req.user.userId, req.body, { new: true, runValidators: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Reset password
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword, confirmPassword, answer } = req.body;
    if (!email || !newPassword || !confirmPassword || !answer) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
      if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const user = await User.findOne({ email, answer });
    if (!user) {
      return res.status(404).json({ message: 'User not found or incorrect answer' });
    }

    user.password = newPassword;
    await user.save();
    res.json({ message: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};