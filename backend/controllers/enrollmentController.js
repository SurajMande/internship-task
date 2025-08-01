const Enrollment = require('../models/Enrollment');

exports.getMyEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ studentId: 'dummyStudent123' }).populate('courseId');
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching enrollments' });
  }
};

exports.createEnrollment = async (req, res) => {
  try {
    const { courseId } = req.body;
    const enrollment = new Enrollment({
      courseId,
      studentId: 'dummyStudent123',
      enrollmentDate: new Date()
    });
    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ error: 'Error creating enrollment' });
  }
};