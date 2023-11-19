// src/controllers/teamController.js
const express = require('express');
const { validationResult } = require('express-validator');
const { authenticate } = require('../middleware/authenticationMiddleware');
const { validateTeamCreation } = require('../middleware/validationMiddleware');
const { logAndRespondError } = require('../utils/errorHandler');
const Team = require('../models/team');

const router = express.Router();

// API endpoint to create a team
router.post('/', authenticate, validateTeamCreation, async (req, res) => {
   //create-team endpoint logic
   const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logAndRespondError(res, 400, 'Invalid input data', errors.array());
  }

  const { role } = req.user;

  if (role !== 'admin' && role !== 'administrator') {
    logAndRespondError(res, 403, 'Forbidden - Insufficient privileges');
  }

  // Create a new team in the database
  try {
    const { name, category } = req.body;

    // Using Sequelize to create a new Team record
    const createdTeam = await Team.create({ name, category });

    // Log the team creation event
    req.app.locals.logger.info('Team created successfully', { teamId: createdTeam.id, teamName: createdTeam.name });

    // Return a success response with the created team and a unique team identifier
    res.status(201).json({ success: true, message: 'Team created successfully', teamId: createdTeam.id });
  } catch (error) {
    logAndRespondError(res, 500, 'Internal Server Error', error.message);
  }
});

module.exports = router;
