const express = require('express');
const router = express.Router();
const asyncHelper = require('./asyncHandler');

// import models 
const Courses = require('../models').Courses;

// GET /api/courses 200 - Returns a list of courses (including the user that owns each course)
router.get('/api/courses', asyncHelper.asyncHandler(async(req, res) => {
    const arrayOfCourses = await Courses.findAll()
    res.send(arrayOfCourses)
    res.status(200).end(); 
}));
// GET /api/courses/:id 200 - Returns a course (including the user that owns the course) for the provided course ID
router.get('/api/courses/:id', asyncHelper.asyncHandler(async(req, res) => {
    const arrayOfCourses = await Courses.findByPk(req.params.id)
    res.send(arrayOfCourses)
    res.status(200).end(); 
}));
// POST /api/courses 201 - Creates a course, sets the Location header to the URI for the course, and returns no content
router.post('/api/courses', asyncHelper.asyncHandler(async(req, res) => {
    await Courses.create(req.body);
    res.status(201).end(); 
}));
// PUT /api/courses/:id 204 - Updates a course and returns no content
// DELETE /api/courses/:id 204 - Deletes a course and returns no content
router.delete('/api/courses/:id', asyncHelper.asyncHandler(async(req, res) => {
    const courseToBeDeleted = await Courses.findByPk(req.params.id)
    await courseToBeDeleted.destroy();
    res.status(204).end(); 
}));

module.exports = router;