import React from "react";
import { useParams,Outlet } from "react-router-dom";
import  CourseData  from "../data/CourseData.jsx";
import CourseContent from "../components/CourseContent.jsx";
import CourseBg from "../components/CourseBg.jsx";
import NavigationItem from "../components/NavigationItem.jsx";
import { AiFillInfoCircle } from "react-icons/ai"; 
import { BsListCheck, BsFillPersonBadgeFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";

const CourseDetailPage = () => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const course = CourseData.find((course) => course.id === courseId);

  if (!course) {
    return <div>Course not found!</div>;
  }
  return (
    <div>
      <CourseBg  mainCategory={CourseData[courseId - 1].mainCategory}/>
      <CourseContent courses={CourseData[courseId - 1]} />
      <div className="flex flex-col px-40 gap-5">
      <ul className="grid grid-cols-4 w-[80%] bg-[#f5f5f5] border-x-2 border-gray-300 rounded-sm">
        <NavigationItem to={`/course/${courseId}/overview`} icon={AiFillInfoCircle} label="Overview" />
        <NavigationItem to={`/course/${courseId}/curriculum`} icon={BsListCheck} label="Curriculum" />
        <NavigationItem to={`/course/${courseId}/instructor`} icon={BsFillPersonBadgeFill} label="Instructor" />
        <NavigationItem to={`/course/${courseId}/review`} icon={MdRateReview} label="Reviews" />
      </ul>
    </div>
      <Outlet />
    </div>
  );
};

export default CourseDetailPage;
