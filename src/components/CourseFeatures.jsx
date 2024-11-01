import React from "react";

const CourseFeatures = () => {
  return (
    <div className="bg-white shadow-sm shadow-[#32CCBC] rounded-sm p-4 pt-20">
      <h1 className="text-xl font-semibold mb-10 text-center text-[#32CCBC] ">COURSE FEATURES</h1>
      <ul className="flex flex-col gap-10 text-sm">
        <li className="flex justify-between py-2 border-b border-gray-400">
          <span>Lectures : </span>
          <span>10</span>
        </li>
        <li className="flex justify-between py-2 border-b border-gray-400">
          <span>Quizzes : </span>
          <span>10</span>
        </li>
        <li className="flex justify-between py-2 border-b border-gray-400">
          <span>Duration :</span>
          <span>4 weeks</span>
        </li>
        <li className="flex justify-between py-2 border-b border-gray-400">
          <span>Skill Level :</span>
          <span>Intermediate</span>
        </li>
        <li className="flex justify-between py-2 border-b border-gray-300">
          <span>Language :</span>
          <span>English</span>
        </li>
        <li className="flex justify-between py-2 border-b border-gray-400">
          <span>Students :</span>
          <span>1500+</span>
        </li>
        <li className="flex justify-between py-2">
          <span>Assessments :</span>
          <span>Weekly</span>
        </li>
      </ul>
    </div>
  );
};

export default CourseFeatures;


