// src/utils/logger.js
const winston = require('winston');

function setupLogger(app) {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'team-management-system' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

  // Attach the logger to the app.locals so that it can be accessed globally
  app.locals.logger = logger;
}

module.exports = { setupLogger };
