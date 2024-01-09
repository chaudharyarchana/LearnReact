// HTMLPage.js
import Navbar from '../../Components/Navbar';
import Sidebar from './Sidebar';
import React from 'react';

const HTMLPage = () => {
  return (
    <>
         <div className='fixed w-full'>
    <Navbar/>
    </div>

    <div className='flex'>
      <div className='w-2/12 h-96  bg-black text-white  '>
         <Sidebar />
      </div>
      
      
    <div className=" pt-20 pl-32 sm:pl-32 sm:pr-20 mx-auto pr-4 bg-slate-900 text-white" >

    
      <h1 className="text-2xl sm:text-4xl font-bold text-center underline mb-8">HTML: The Foundation of Web Development</h1>

      {/* What is HTML? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What is HTML?</h2>
        <p>
          HTML, or HyperText Markup Language, is the backbone of web development. It provides the structure for web pages,
          allowing you to define the content's hierarchy and presentation. HTML uses tags to create elements like headings,
          paragraphs, lists, links, and more.
        </p>
      </section>

      {/* Important HTML Topics */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Important HTML Topics</h2>

        {/* Document Structure */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Document Structure</h3>
          <p>
            HTML documents follow a standard structure with a <code>&lt;!DOCTYPE html&gt;</code> declaration, <code>&lt;html&gt;</code>,
            <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> sections. Understanding this structure is fundamental to creating web pages.
          </p>
        </div>

        {/* Headings and Paragraphs */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Headings and Paragraphs</h3>
          <p>
            Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) define the hierarchy of content, while paragraphs (<code>&lt;p&gt;</code>)
            organize text into meaningful blocks. Proper usage enhances readability and accessibility.
          </p>
        </div>

        {/* Lists */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Lists</h3>
          <p>
            Lists, both unordered (<code>&lt;ul&gt;</code>) and ordered (<code>&lt;ol&gt;</code>), help structure content. List items (<code>&lt;li&gt;</code>)
            within these elements create bullet points or numbered lists.
          </p>
        </div>

        {/* Links and Images */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Links and Images</h3>
          <p>
            Hyperlinks (<code>&lt;a&gt;</code>) connect web pages, enabling navigation. Images (<code>&lt;img&gt;</code>) enhance visual appeal,
            providing context and information.
          </p>
        </div>

        {/* Forms */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Forms</h3>
          <p>
            Forms (<code>&lt;form&gt;</code>) facilitate user input, allowing interaction with web applications. Form elements like input fields,
            checkboxes, and buttons help collect and submit data.
          </p>
        </div>
      </section>
    </div>
    </div>
    </>

  );
};

export default HTMLPage;
