import React from "react";
import { AiFillStar } from "react-icons/ai";

const CourseInfo = ({ tutorName, category, reviewCount }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <img
          src="https://png.pngtree.com/background/20230611/original/pngtree-an-anime-girl-of-dark-hair-and-long-black-hair-picture-image_3155069.jpg"
          alt={tutorName}
          className="rounded-full w-10 h-10 object-cover"
        />
        <div className="flex flex-col justify-center border-r-2 border-gray-400 pr-2">
          <h3 className="text-xs font-medium hover:underline cursor-pointer">{tutorName}</h3>
          <p className="text-[10px] text-gray-500">Instructor</p>
        </div>
      </div>
      <div className="flex flex-col justify-center border-r-2 border-gray-300 pr-2">
        <h3 className="text-xs font-medium hover:underline cursor-pointer">{category}</h3>
        <p className="text-[10px] text-gray-500">Category</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex gap-1 items-center mt-1">
          <span className="flex items-center text-[#32CCBC] text-lg">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </span>
          <p className="text-[10px] text-black mt-1">({reviewCount} reviews)</p>
        </div>
        <p className="text-[10px] ml-1 text-gray-500">Review</p>
      </div>
    </div>
  );
};

export default CourseInfo;


