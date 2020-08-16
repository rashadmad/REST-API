const express = require('express');
const router = express.Router();
const asyncHelper = require('./asyncHandler');

// import models 
const Course = require('../models').Course;
const User = require('../models').User;

// Returns the currently authenticated user
router.get('/api/users', asyncHelper.asyncHandler(async(req, res) => {
    // TODO: await Project.findOne({ where: { authenticated: true } });
    const authUser = await User.findByPk(1);
    console.log(authUser)
}));

module.exports = router;
