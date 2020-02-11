const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model('Course')

router.get('/list', (req, res) => {
  CourseModel.find((err, docs)=>{
    if (!err) {
      courseDocs = docs.map(doc => {
        return {
          name: doc.courseName,
          id: doc.courseId,
          duration: doc.courseDuration,
          fee: doc.courseFee
        }
      })
      res.render('list', { docs: courseDocs })
    }
  })
});

module.exports = router;