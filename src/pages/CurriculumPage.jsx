import React from "react";
import { CourseCurriculum } from "../data/CourseCurriculum.jsx";
import { useParams, Link } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const CurriculumPage = () => {
  const { id } = useParams();
  const course = CourseCurriculum.find(
    (item) => item.courseId === parseInt(id)
  );
  const { courseName, curriculum } = course;

  return (
    <div className="flex flex-col px-40">
      <div className="flex flex-col w-[80%] p-10 py-16 gap-10 rounded-sm shadow bg-white">
        <h2 className="text-xl font-semibold tracking-wide">{courseName}</h2>
        <div className="flex flex-col gap-10">
          {curriculum.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-lg font-semibold">
                SECTION - {sectionIndex + 1} : {section.sectionTitle}
              </h3>
              <ul className="flex flex-col mt-5 gap-5">
                {section.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="flex justify-between items-center text-sm pl-5 cursor-pointer hover:text-teal-500">
                    <Link to={`/course/${id}/sections/${sectionIndex}/lessons/${lessonIndex}`} className="flex gap-2 items-center">
                      <VscDebugBreakpointLog />
                      {lesson.lessonTitle}
                    </Link>
                    {lesson.duration}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;

