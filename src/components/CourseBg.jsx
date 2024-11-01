import React from "react";
import course_bg from "../assets/course_bg.jpg";

const CourseBg = ({ mainCategory}) => {
  return (
    <div className="bg-black bg-opacity-50 h-[300px] w-full bg-cover bg-center relative">
      <img
        src={course_bg}
        alt="course"
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <div className="flex items-center gap-2 justify-center h-full">
        <div className="flex flex-col items-end">
          <hr className="h-[2px] w-12 bg-white mb-1" />
          <hr className="h-[1px] w-24 bg-white" />
        </div>

        <h1 className="text-white text-3xl font-extralight tracking-wider cursor-pointer">
          { mainCategory}
        </h1>

        <div className="flex flex-col items-start">
          <hr className="h-[2px] w-12 bg-white mb-1" />
          <hr className="h-[1px] w-24 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default CourseBg;
