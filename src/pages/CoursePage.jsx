import React from "react";
import CourseCard from "../components/CourseCard";
import  CourseData  from "../data/CourseData.jsx";

const CoursePage = () => {
  return (
    <div className="p-20">
      <div className="flex items-center text-2xl text-black gap-3 font-semibold tracking-wide mb-10">
        <h1>Popular Courses</h1>
        <hr className="bg-black w-32 h-[2px] rounded-full" />
      </div>
    <div className="grid grid-cols-4 gap-5">
    {
        CourseData.map((course,index)=>{
            return <CourseCard key={index} id={course.id} courseName={course.courseName} totalDuration={course.totalDuration} image={course.image} reviewCount={course.reviewCount} tutorName={course.tutorName} price={course.price} />
        })
      }
    </div>
    </div>
  );
};

export default CoursePage;
