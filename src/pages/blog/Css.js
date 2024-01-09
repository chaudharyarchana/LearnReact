// CSSPage.js
import Navbar from '../../Components/Navbar';
import React from 'react';
import Sidebar from './Sidebar';

const CSSPage = () => {
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
      <h1 className="text-2xl sm:text-4xl text-center underline font-bold mb-8">CSS: Styling the Web</h1>

      {/* What is CSS? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What is CSS?</h2>
        <p>
          CSS, or Cascading Style Sheets, is a styling language used to control the presentation and layout of HTML documents.
          It enables developers to enhance the visual appearance of web pages by applying styles, such as colors, fonts, and spacing.
        </p>
      </section>

      {/* Important CSS Topics */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Important CSS Topics</h2>

        {/* Selectors and Rules */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Selectors and Rules</h3>
          <p>
            CSS selectors target HTML elements, and rules define how those elements should be styled. Understanding the
            relationship between selectors and rules is crucial for effective styling.
          </p>
        </div>

        {/* Box Model */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Box Model</h3>
          <p>
            The CSS box model describes how elements are rendered on the page, including content, padding, borders, and margins.
            Mastery of the box model is fundamental for creating well-structured layouts.
          </p>
        </div>

        {/* Flexbox and Grid */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Flexbox and Grid</h3>
          <p>
            Flexbox and Grid are layout systems that simplify the design and alignment of elements. Flexbox is ideal for one-dimensional
            layouts, while Grid is excellent for two-dimensional layouts.
          </p>
        </div>

        {/* Responsive Design */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
          <p>
            Responsive design ensures that web pages adapt to different screen sizes and devices. Techniques like media queries and
            fluid grids are used to create a seamless user experience across devices.
          </p>
        </div>

        {/* Transitions and Animations */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Transitions and Animations</h3>
          <p>
            CSS transitions and animations add dynamic effects to web pages. Transitions smoothly change property values, while animations
            allow for more complex and controlled movement.
          </p>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};

export default CSSPage;
