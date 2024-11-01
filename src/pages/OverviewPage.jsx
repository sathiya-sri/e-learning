import React from "react";
import  CourseData  from "../data/CourseData";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import CourseFeatures from "../components/CourseFeatures";

const OverviewPage = () => {
  const { id } = useParams();
  const course = CourseData.find((course)=>course.id===parseInt(id));

  return (
    <div className="flex flex-col px-40 ">
      <div className="flex justify-between gap-4 w-[80%] bg-white py-10 px-8 rounded-sm shadow">
        <div className="gap-5 flex flex-col w-[70%]">
          <div>
            <h1 className="text-xl font-semibold mb-4">
              COURSE DESCRIPTION :
            </h1>
            <p className="text-sm font-light text-justify" style={{ textIndent: "3rem" }}>
              {course.overview.description}
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">TARGET AUDIENCE : </h1>
            <p className="text-sm font-light text-justify" style={{ textIndent: "3rem" }}>
              {course.overview.audience}
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4">PREREQUISITES : </h1>
            <p className="text-sm font-light text-justify" style={{ textIndent: "3rem" }}>
              {course.overview.prerequisites}
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-2">LEARNING OUTCOMES :</h1>
            {course.overview.learningOutcomes.map((learn) => (
              <div key={learn} className="flex items-center gap-2 py-5 ml-10">
                <AiFillStar className="text-teal-500" />
                <p className="text-sm font-light">{learn}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[35%]">
          <CourseFeatures />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
