import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
const API_BASE_URL = `http://localhost:5000`;

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      // fetch courses
      const res1 = await fetch(`${API_BASE_URL}/api/courses`);
      if (!res1.ok) throw new Error("Error fetching courses");
      const data1 = await res1.json();
      setCourses(data1);

      const res2 = await fetch(`${API_BASE_URL}/api/enrollments/me`);
      if (!res2.ok) throw new Error("Error fetching enrollments");
      const data2 = await res2.json();
      setEnrolledCourses(data2 || []);
    } catch (err) {
      setError(err.message || "Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEnroll = async courseId => {
    try {
      setError(null);
      setSuccess(null);
      const response = await fetch(`${API_BASE_URL}/api/enrollments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId })
      });
      if (response.ok) {
        setSuccess("Successfully enrolled in course!");
        fetchData(); 
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      } else {
        setError("Error enrolling in course");
        fetchData();
      }
    } catch (err) {
      setError("Error enrolling in course");
      fetchData();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-8">
      <header className="sticky top-0 bg-white z-10 py-5 mb-7 border-b border-gray-200 shadow-sm rounded-b-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center">
          Course Catalog
        </h1>
      </header>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6 text-center shadow">{error}</div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded-md mb-6 text-center shadow">{success}</div>
      )}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map(course => (
          <CourseCard
            key={course._id}
            course={course}
            enrolledCourses={enrolledCourses}
            onEnroll={handleEnroll}
          />
        ))}
      </div>
      {courses.length === 0 && !error && (
        <p className="text-center text-gray-400 text-lg">No courses available.</p>
      )}
    </div>
  );
};

export default CourseList;
