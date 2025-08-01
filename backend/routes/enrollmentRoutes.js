const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.get('/me', enrollmentController.getMyEnrollments);
router.post('/', enrollmentController.createEnrollment);

module.exports = router;