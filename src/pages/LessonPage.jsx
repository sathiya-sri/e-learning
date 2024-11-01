import React from "react";
import { useParams } from "react-router-dom";
import { CourseCurriculum } from "../data/CourseCurriculum.jsx";
import Sidebar from "../components/Sidebar.jsx";
import ReactMarkdown from "react-markdown";

const LessonPage = () => {
  const { id, sectionIndex, lessonIndex } = useParams();
  const curriculum = CourseCurriculum.find(
    (curr) => curr.courseId === parseInt(id)
  );

  const contentArray = [
    {
      id: 1,
      title: "Introduction to HTML & CSS",
      content: `
What is HTML?
HTML, an acronym for HyperText Markup Language, is the standard language for designing web pages. It combines Hypertext, which establishes the links between web pages, and Markup language, which defines the structure of web pages within tags. HTML forms the backbone of any webpage, dictating its structure and content.

Example: A simple HTML page that displays the heading and paragraph content:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Simple HTML Page</title>
</head>
<body>
    <h1>Welcome to GeeksforGeeks</h1>
    <p>A computer science portal for geeks</p>
</body>
</html>
\`\`\`

Why is HTML used?
- It is a simple markup language with easy implementation.
- It creates the structure of a website.
- It helps in developing fundamentals of web programming.

Complete Reference:
- HTML Tags
- HTML Attributes
- HTML Global Attributes
- HTML Event Attributes
- HTML Canvas
- HTML DOM
- HTML DOM Audio/Video
- HTML5
- HTML5 MathML
- HTML Interview Questions

What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used to design webpages and make them attractive. CSS simplifies the process of styling web pages.

Types of CSS:
1. Inline CSS: Styles added using the “style” attribute within tags.
2. Internal CSS: Styles defined within a <style> tag in the <head>.
3. External CSS: Styles defined in a separate CSS file linked to the HTML.

Why is CSS used?
CSS enhances the aesthetic appeal and usability of a website, improving user interaction.
      `,
    },
    {
      id: 2,
      title: "Setting Up Your Coding Environment",
      content: `
We have created all of the directories needed for our project. Let's start writing our HTML code. Since we are designing a single-page website (with no internal links), we will write all our code in the “index.html” file. No additional HTML files are needed for this project.

Before we begin:
- All HTML code will be in the “index.html” file.
- All code will follow standard HTML5 rules.

What is HTML5?
HTML5 is the fifth version of the HTML scripting language, supporting many new features not available in older versions. 
For example, HTML5 introduces Semantic Elements, which have meaningful names that describe the type of content (e.g., header, footer, table).

To learn more about what's new in HTML5, visit:
- Difference between HTML and HTML5
- HTML5 | Semantics

Now, let's start coding our website. Remove everything from your index.html and keep only the standard HTML structure:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Sample Webpage</title>
</head>
<body>
</body>
</html>
\`\`\`

Let's divide our website into smaller parts following HTML5 semantics:

- HEADER: Divided into:
  - Navigation Menu
  - Image Section
- MAIN: Contains smaller sections for different information.
- FOOTER

Write the following code in your index.html to create the sections:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>First Web Page</title>
</head>
<body>
    <header>
        <div id="top-header">
            <div id="logo"></div>
            <nav></nav>
        </div>
        <div id="header-image-menu"></div>
    </header>
    <main>
        <section></section>
        <section></section>
        <section></section>
    </main>
    <footer></footer>
</body>
</html>
\`\`\`

If you run the above code, you will see an empty web page since we have not printed anything yet. The above code outlines the skeleton of the website using HTML5 tags. In the next article, we will see how to style the Header menu with CSS.
      `,
    },
  ];

  
  let lessonContent = null;
  
  // Check if the curriculum exists
  if (curriculum) {
    const section = curriculum.curriculum[parseInt(sectionIndex)];
    // Check if the section exists
    if (section) {
      lessonContent = section.lessons[parseInt(lessonIndex)];
    }
  }

 
  const content = lessonContent ? contentArray.find(
    (content) => content.title === lessonContent.lessonTitle 
  ) : null;

  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10 overflow-y-auto ml-80">
        {lessonContent ? (
          <div className="mt-4 bg-white">
            <div className="flex justify-between p-1">
              <h1 className="text-xl font-medium text-black">{lessonContent.lessonTitle}</h1>
              <p className="text-sm text-teal-500">{lessonContent.duration}</p>
            </div>
            {content ? (
              <div className="mt-4">
                <pre className="p-4 rounded overflow-auto whitespace-pre-wrap">
                 <ReactMarkdown>{content.content}</ReactMarkdown>
                </pre>
              </div>
            ) : (
              <p>No content is available...</p>
            )}
          </div>
        ) : (
          <p>No lesson content is available...</p>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
