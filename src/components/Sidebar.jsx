import React from "react";
import { CourseCurriculum } from "../data/CourseCurriculum.jsx";
import { useParams, Link } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Sidebar = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const course = CourseCurriculum.find((item) => item.courseId === parseInt(id));

  // Check if the course is found
  if (!course) {
    return <div className="p-4">Course not found.</div>;
  }

  const { courseName, curriculum } = course;

  return (
    <div className="h-screen fixed left-0 flex flex-col overflow-hidden">
      <div className="flex flex-col w-[350px] p-2 py-16 gap-10 rounded-sm shadow bg-white overflow-y-auto hide-scrollbar">
        <h2 className="text-xl font-semibold tracking-wide">{courseName}</h2>
        <div className="flex flex-col gap-10">
          {curriculum.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-lg font-semibold">
                SECTION - {sectionIndex + 1}: {section.sectionTitle}
              </h3>
              <ul className="flex flex-col mt-5 gap-5">
                {section.lessons.map((lesson, lessonIndex) => (
                  <li
                    key={lessonIndex}
                    className="flex justify-between items-center gap-5 text-sm pl-4 cursor-pointer hover:text-teal-500"
                  >
                    <Link
                      to={`/course/${id}/sections/${sectionIndex}/lessons/${lessonIndex}`} // Updated link to include sectionIndex
                      className="flex gap-2 items-center"
                    >
                      <VscDebugBreakpointLog />
                      {lesson.lessonTitle} {/* Display the lesson title */}
                    </Link>
                    <span>{lesson.duration}</span> {/* Display the lesson duration */}
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

export default Sidebar;


