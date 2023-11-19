// src/middleware/authenticationMiddleware.js
const jwt = require('jsonwebtoken');
const { logAndRespondError } = require('../utils/errorHandler');

function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
      logAndRespondError(res, 401, 'Unauthorized - Token missing');
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      logAndRespondError(res, 401, 'Unauthorized - Invalid token');
    }
}

module.exports = { authenticate };
