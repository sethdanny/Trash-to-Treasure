const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = async (req, res, next) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token
    const decoded = jwt.verify(token, 'your_secret_key');

    // Check if the token has been invalidated for the user
    const user = await User.findOne({ _id: decoded._id });

    if (!user || user.invalidatedTokens.includes(token)) {
      throw new Error('Token is invalidated');
    }

    // Attach the user ID to the request object
    req.userId = decoded._id;

    // Attach the token to the request object for further use if needed
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = verifyToken;
