const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected ${mongoose.connection.host}`.bgGreen);
  } catch (err) {
    console.error('MongoDB connection error:'.bgRed, err.message);
    process.exit(1);
  }
};

module.exports = connectDB;