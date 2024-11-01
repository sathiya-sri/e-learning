import React from "react";
import CourseInfo from "./CourseInfo";
import SubscriptionInfo from "./SubscriptionInfo";

const CourseContent = ({ courses }) => {
  const { courseName, tutorName, category, reviewCount, price, image, id } =
    courses;

  return (
    <div className="flex flex-col  px-40 py-10 gap-5">
      <h1 className="text-4xl font-semibold tracking-wide">{courseName}</h1>
      <div className="flex items-center gap-2 justify-between w-[80%]">
        <CourseInfo
          tutorName={tutorName}
          category={category}
          reviewCount={reviewCount}
        />
        <SubscriptionInfo price={price} id={id} />
      </div>
      <img
        src={image}
        alt={courseName}
        className="object-cover w-[80%] h-[350px] rounded cursor-pointer"
      />
    </div>
  );
};

export default CourseContent;
