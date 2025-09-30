// Middleware to authenticate users using JWT
const jwt = require('jsonwebtoken');

// Secret key for signing and verifying JWTs
const SECRET_KEY = process.env.JWT_SECRET;

const authenticateUser = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error('No token provided');
    }

    // Verify token and decode payload
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log('Decoded Token:', decoded);
    console.log('User ID from Token:', decoded.userId);
  
    req.user = decoded; // Attach user info to request object
    next(); // Call next middleware or route handler
  } catch (error) {
    res.status(401).send({ error: 'Authenticate User' });
  }
};

module.exports = authenticateUser;