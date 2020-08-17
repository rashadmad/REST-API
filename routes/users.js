const express = require('express');
const router = express.Router();
const asyncHelper = require('./asyncHandler');

// import models 
const { sequelize } = require('../models');
const Course = require('../models').Course;
const User = require('../models').User;

// Returns the currently authenticated user
router.get('/api/users/:id', asyncHelper.asyncHandler(async(req, res) => {
    // TODO: await Project.findOne({ where: { authenticated: true } });
    const authUser = await User.findByPk(req.params.id);
    res.send(authUser)
}));

// Creates a user, sets the Location header to "/", and returns no content
router.post('/api/users/:id', asyncHelper.asyncHandler(async(req, res) => {
    const authUser = await User.create(req.body);
    res.send(authUser)
}));

module.exports = router;
