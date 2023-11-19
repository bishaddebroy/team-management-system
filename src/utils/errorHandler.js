// src/utils/errorHandler.js
const winston = require('winston');

function logAndRespondError(res, statusCode, errorMessage, details = null) {
  // Log the error using Winston logger
  const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });

  // Log the error details
  logger.error(errorMessage, { details });

  // Respond to the client with the error status code and message
  res.status(statusCode).json({ success: false, error: errorMessage, details });
}

module.exports = { logAndRespondError };
