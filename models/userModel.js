const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: { value: true, message: 'Name is required' },
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: {value: true,message: 'Email is required' },
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: {value: true,message: 'Password is required' },
    minlength: 6
  },
  address: {
    type: Array,
  },
  phone: {
    type: String,
    required: { value: true, message: 'Phone number is required' },
    trim: true
  },
  role: {
    type: String,
    required: {value: true,message: 'Role is required' },
    enum: ['user', 'admin', 'vendor', 'delivery', 'superadmin'],
    default: 'user'
  },
  answer: {
    type: String,
    required: { value: true, message: 'Answer is required' },
    trim: true
  }
}, { timestamps: true});

module.exports = mongoose.model('User', userSchema);