const express = require('express');
const mongoose = require('mongoose');
const Course = require('../models/course.constructor');

const router = express.Router();
const CourseModel = mongoose.model('Course');

router.get('/list', (req, res) => {
  CourseModel.find((err, docs)=>{
    if (!err) {
      courseDocs = docs.map(doc => new Course(doc))
      res.render('list', { docs: courseDocs })
    }
  })
});

router.get('/add', (req, res) => {
  res.render('add-course')
});

router.post('/add', (req, res) => {
  var course = new CourseModel(req.body);
  course.courseId = Math.ceil(Math.random() * 10 ** 8)
  course.save(err => {
    if (!err) {
      res.redirect('/course/list')
    } else {
      res.send(`Error: ${error}`)
    }
  })
});

router.post('/delete/:id', (req, res) => {
  CourseModel.findByIdAndDelete({
    _id: req.params.id
  }, (err => {
    if (!err) {
      res.redirect('/course/list')
    } else {
      console.log("There was an error while deleting.")
    }
  }))
})

module.exports = router;