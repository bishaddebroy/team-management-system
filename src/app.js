// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const teamRoutes = require('./controllers/teamController');
const sequelize = require('./database');
const { setupLogger } = require('./utils/logger');
const { logAndRespondError } = require('./utils/errorHandler');
// dotenv config
require('dotenv').config();

const app = express();

// Set up logger
setupLogger(app);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/create-team', teamRoutes);

// Sync the database models with the database
sequelize.sync()
  .then(() => {
    app.locals.logger.info('Database synchronized');
  })
  .catch((error) => {
    app.locals.logger.error('Database Synchronized Error', error.message);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  app.locals.logger.info(`Server is running on port ${PORT}`);
});

module.exports = app;
