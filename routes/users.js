const express = require('express');
const router = express.Router();

// import models 
const Course = require('../models').Course;
const User = require('../models').User;

// Returns the currently authenticated user
router.get('/', function (req, res) {
    res.send('hello world')
})

module.exports = router;
