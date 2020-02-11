class Course {
  constructor(args) {
    this._id = args._id
    this.courseId = args.courseId,
    this.courseName = args.courseName,
    this.courseDuration = args.courseDuration,
    this.courseFee = args.courseFee
  }
}

module.exports = Course;