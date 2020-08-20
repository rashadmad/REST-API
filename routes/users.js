const express = require('express');
const router = express.Router();
const middleware = require('./customMiddleware');
const auth = require('basic-auth');
const bcryptjs = require('bcryptjs');

// import models 
const Users = require('../models').Users;


// Returns the currently authenticated user
router.get('/api/users/', middleware.authenticateUser, middleware.asyncHandler(async(req, res) => {
    //on a successful authentication user equals current user
    const user = req.currentUser;
    res.json({
        name: user.email,
        pass: user.password,
      });
    res.send(user)
}));

// Creates a user, sets the Location header to "/", and returns no content
router.post('/api/users', middleware.asyncHandler(async(req, res) => {
    const authUser = await Users.create(req.body);
    res.location('/')
    authUser.password = bcryptjs.hashSync(authUser.password);
    res.status(201).end(); 
}));

module.exports = router;
