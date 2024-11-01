import React, { useState } from "react";
import  CourseData  from "../data/CourseData.jsx";
import { useParams } from "react-router-dom";
const CourseRegisterPage = () => {
  const {id} =useParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    studentId: "",
    enrollmentYear: "",
  });
  const course=CourseData.find((course)=>course.id===parseInt(id));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration successful!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course:course.courseName,
      studentId: "",
      enrollmentYear: "",
    }); 
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Course Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="studentId">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
              placeholder="Enter your student ID"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="enrollmentYear">
              Enrollment Year
            </label>
            <input
              type="number"
              id="enrollmentYear"
              name="enrollmentYear"
              value={formData.enrollmentYear}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
              placeholder="Enter your enrollment year"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="course">
              Selected Course
            </label>
            <input
              type="text"
              id="enrollmentYear"
              name="enrollmentYear"
              value={course.courseName}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
              placeholder="Enter your enrollment year"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white font-bold rounded hover:bg-teal-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseRegisterPage;
