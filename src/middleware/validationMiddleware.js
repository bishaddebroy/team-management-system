// src/middleware/validationMiddleware.js
const { body } = require('express-validator');

const validateTeamCreation = [
  body('name').isString().isLength({ min: 2, max: 50 }),
  body('category').isString().isLength({ max: 100 }),
];

module.exports = { validateTeamCreation };
