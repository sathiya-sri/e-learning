import React from "react";
import CoursePage from "./pages/CoursePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import CurriculumPage from "./pages/CurriculumPage";
import LessonPage from "./pages/LessonPage";
import InstructorPage from "./pages/InstructorPage";
import ReviewPage from "./pages/ReviewPage";
import CourseRegisterPage from "./pages/CourseRegisterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoursePage />} />  
        <Route path="/course/:id" element={<CourseDetailPage />}>
          <Route path="overview" element={<OverviewPage />} />
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="instructor" element={<InstructorPage />} />
          <Route path="review" element={<ReviewPage />} />
        </Route>
        <Route path="/course/:id/sections/:sectionIndex/lessons/:lessonIndex" element={<LessonPage />} />
        <Route path="/course/:id/register" element={<CourseRegisterPage/>}/>
      </Routes>
    </>
  );
};

export default App;

