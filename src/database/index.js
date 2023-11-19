// src/database/index.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  //Sequelize configurations
  dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql', etc.
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306, // or the port used by your database
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false, // Disable SQL logging to the console (optional)
});

module.exports = sequelize;
