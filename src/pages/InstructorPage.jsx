import React from "react";
import { useParams } from "react-router-dom";
import  CourseData  from "../data/CourseData.jsx";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const InstructorPage = () => {
  const { id } = useParams();
  const instructor = CourseData.find((item) => item.id === parseInt(id));

  return (
    <div className="flex flex-col px-40">
      <div className="flex justify-between gap-4 w-[80%] bg-white py-10 px-10 rounded-sm shadow" >
        <img
          src="https://png.pngtree.com/background/20230611/original/pngtree-an-anime-girl-of-dark-hair-and-long-black-hair-picture-image_3155069.jpg"
          alt={instructor.tutorName}
          className="rounded-full w-10 h-10 object-cover"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-black text-xl">{instructor.tutorName}</h1>
          <p className="text-teal-400 text-sm">Senior Web Developer</p>
          <p className="text-pretty">
            John has over 10 years of experience in web development,
            specializing in React and Node.js.
          </p>

          <h2 className="text-lg font-medium">Courses Taught:</h2>
          <ul>
            <li>{instructor.courseName}</li>
          </ul>

          <h2 className="text-lg font-medium">Contact:</h2>
          <p className="text-lg font-medium">
            Email:{" "}
            <span className="text-sm font-light">
              {instructor.tutorName}@gmail.com
            </span>
          </p>
          <p className="text-lg font-medium">
            Phone: <span className="text-sm font-light">+1 234 567 890</span>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href={`https://twitter.com/${instructor.tutorName}`} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-500 hover:text-blue-700" size={24} />
            </a>
            <a href={`https://linkedin.com/in/${instructor.tutorName}`} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 hover:text-blue-900" size={24} />
            </a>
            <a href={`https://github.com/${instructor.tutorName}`} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-800 hover:text-gray-900" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;
