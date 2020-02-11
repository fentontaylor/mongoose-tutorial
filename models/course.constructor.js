class Course {
  constructor(args) {
    this.courseId = args.courseId,
    this.courseName = args.courseName,
    this.courseDuration = args.courseDuration,
    this.courseFee = args.courseFee
  }
}

module.exports = Course;