const express = require('express');
const router = express.Router();
const middleware = require('./customMiddleware');
const auth = require('basic-auth');

// array for authenticated users
let listOfUsers = []

// import models 
const Users = require('../models').Users;

//I need to create a global variable of all users in the database and update it every time the file runs
(async () => {
    try {
        const allUsers = await Users.findAll()
        listOfUsers.push(allUsers)
    } catch {
        console.log("There are no users created yet.")
    }
})();


// Returns the currently authenticated user
router.get('/api/users/', middleware.authenticateUser, middleware.asyncHandler(async(req, res) => {
    //on a successful authentication user equals current user
    const users = Users.findAll()
    const user = req.currentUser;
    res.json({
        emailAddress: user.emailAddress,
        pass: user.password,
      });
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
