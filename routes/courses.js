const express = require('express');
const router = express.Router();

// import models 
const Courses = require('../models').Course;
const User = require('../models').User;