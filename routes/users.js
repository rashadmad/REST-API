const express = require('express');
const router = express.Router();
const middleware = require('./customMiddleware');
const bcryptjs = require('bcryptjs');
const auth = require('basic-auth');

// array for authenticated users
let authenticatedUsers = []

// import models 
const Users = require('../models').Users;

(async () => {
    try {
        const allUsers = await Users.findAll()
        authenticatedUsers.push(allUsers)
    } catch {
        console.log("There are no users created")
    }
})();


// Returns the currently authenticated user
router.get('/api/users/:id', middleware.authenticateUser, middleware.asyncHandler(async(req, res) => {
    //on a successful authentication user equals current user
    const users = Users.findAll()
    const user = req.currentUser;
    res.json({
        emailAddress: user.emailAddress,
        pass: user.password,
      });
    res.send
}));

// Creates a user, sets the Location header to "/", and returns no content
router.post('/api/users', middleware.asyncHandler(async(req, res) => {
    const authUser = await Users.create(req.body);
    res.location('/')
    res.send(authUser)
    authUser.password = bcryptjs.hashSync(authUser.password);
    authenticatedUsers.push(req.body)
    res.status(201).end(); 
}));

module.exports = router;
