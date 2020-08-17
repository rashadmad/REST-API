const express = require('express');
const router = express.Router();
const asyncHelper = require('./asyncHandler');

// import models 
const Course = require('../models').Course;
const Users = require('../models').Users;

// Returns the currently authenticated user
router.get('/api/users/:id', asyncHelper.asyncHandler(async(req, res) => {
    // TODO: await Project.findOne({ where: { authenticated: true } });
    const authUser = await Users.findByPk(req.params.id);
    res.send(authUser)
}));

// Creates a user, sets the Location header to "/", and returns no content
router.post('/api/users', asyncHelper.asyncHandler(async(req, res) => {
    const authUser = await Users.create(req.body);
    console.log(req.body);
}));

module.exports = router;
