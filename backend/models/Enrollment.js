const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  studentId: { type: String, required: true },
  enrollmentDate: { type: Date, required: true }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);