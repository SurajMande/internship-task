const express = require('express');
const cors = require('cors');
const connectDB = require('./models/db');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));