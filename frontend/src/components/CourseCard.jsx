import React from "react";
import { FiUser, FiClock, FiCheckCircle } from "react-icons/fi";

const CourseCard = ({ course, enrolledCourses, onEnroll }) => {
  const isEnrolled = enrolledCourses.some(
    enrollment =>
      enrollment.courseId &&
      typeof enrollment.courseId === "object" &&
      enrollment.courseId._id === course._id
  );

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-all duration-150">
      <h3 className="text-lg font-semibold text-blue-700 mb-1">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1 text-lg">
          <FiUser className="text-blue-400" /> {course.instructor}
        </span>
        <span className="flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded text-sm">
          <FiClock /> {course.duration}
        </span>
      </div>
      {isEnrolled ? (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
          <FiCheckCircle /> Enrolled
        </span>
      ) : (
        <button
          onClick={() => onEnroll(course._id)}
          disabled={isEnrolled}
          className="w-full py-2 mt-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white text-sm transition disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Enroll
        </button>
      )}
    </div>
  );
};

export default CourseCard;
