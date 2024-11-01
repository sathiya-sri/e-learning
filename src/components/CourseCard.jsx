import React from "react";
import { AiFillStar, AiFillClockCircle } from "react-icons/ai";
import { TiUser } from "react-icons/ti";
import {Link} from "react-router-dom";

const CourseCard = ({
  id,
  courseName,
  totalDuration,
  image,
  reviewCount,
  tutorName,
  price
}) => {
  return (
    <div className="group relative w-72 min-h-[10rem] shadow-2xl bg-white overflow-hidden rounded cursor-pointer">
      <img
        src={image}
        alt={courseName}
        className="w-full h-40 object-cover" 
      />

  
      <div className="absolute inset-0 bg-black bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>


      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
          <span className="flex items-center gap-x-1 px-3 py-2 rounded-full text-xs bg-teal-100 text-black cursor-pointer">
            <TiUser size={18} />
            {tutorName}
          </span>
          <span className="flex items-center gap-x-2 px-3 py-2 rounded-full text-xs bg-teal-100 text-black cursor-pointer">
            <AiFillClockCircle size={18} />
            {totalDuration}
          </span>
        </div>

      {/* Course Name and Price */}
      <div className="flex flex-col text-black gap-1 mt-1">
        <h2 className="font-semibold text-xl overflow-hidden whitespace-nowrap text-ellipsis w-full">
          {courseName}
        </h2>
        <p className="text-lg font-light overflow-hidden whitespace-nowrap text-ellipsis w-full">
          ${price.toFixed(2)}
        </p>
      </div>

     

        <span className="flex items-center mt-1 text-[#32CCBC] text-lg">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
          <span className="text-xs ml-2 text-gray-500">
            {reviewCount} reviews
          </span>
        </span>
        <Link to={`/course/${id}`} className="z-20">
        <button className="mt-2 w-full  bg-[#32CCBC] text-white hover:bg-transparent border-2 border-[#32CCBC] px-6 py-2 rounded-sm tracking-wide font-light transition hover:text-black">
          Read More...
        </button>
        </Link>
        <button className="absolute left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300 bg-[#32CCBC] text-white border-2 border-[#32CCBC] px-6 py-2 rounded-sm tracking-wide font-medium  hover:text-black">
            Join Now
          </button>
      </div>
    </div>
  );
};

export default CourseCard;
