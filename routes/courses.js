const express = require('express');
const router = express.Router();
const asyncHelper = require('./asyncHandler');

// import models 
const Courses = require('../models').Courses;

// GET /api/courses 200 - Returns a list of courses (including the user that owns each course)
// GET /api/courses/:id 200 - Returns a the course (including the user that owns the course) for the provided course ID
// POST /api/courses 201 - Creates a course, sets the Location header to the URI for the course, and returns no content
router.post('/api/courses', asyncHelper.asyncHandler(async(req, res) => {
    const course = await Courses.create(req.body);
    res.location('/')
    res.send(course)
    res.status(201).end(); 
}));
// PUT /api/courses/:id 204 - Updates a course and returns no content
// DELETE /api/courses/:id 204 - Deletes a course and returns no content

module.exports = router;