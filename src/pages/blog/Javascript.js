// JavaScriptPage.js
import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from './Sidebar';
const JavaScriptPage = () => {
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

    
      <h1 className="text-2xl sm:text-4xl font-bold  text-center underline mb-8">JavaScript: Bringing Interactivity to the Web</h1>

      {/* What is JavaScript? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What is JavaScript?</h2>
        <p>
          JavaScript is a versatile scripting language that enables dynamic, client-side behavior on web pages. As a key component
          of web development, JavaScript allows developers to create interactive features, manipulate the Document Object Model (DOM),
          and communicate with servers.
        </p>
      </section>

      {/* Important JavaScript Topics */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Important JavaScript Topics</h2>

        {/* Variables and Data Types */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Variables and Data Types</h3>
          <p>
            Variables store data, and JavaScript supports various data types, including numbers, strings, booleans, and objects.
            Understanding how to declare and use variables is fundamental to programming in JavaScript.
          </p>
        </div>

        {/* Functions */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Functions</h3>
          <p>
            Functions are reusable blocks of code that perform specific tasks. JavaScript functions can take parameters, return values,
            and be invoked at various points in a program.
          </p>
        </div>

        {/* Control Flow (Conditionals and Loops) */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Control Flow (Conditionals and Loops)</h3>
          <p>
            Conditional statements, such as if-else, allow developers to make decisions based on certain conditions. Loops, like for
            and while, enable repetitive execution of code. Both are crucial for controlling the flow of a program.
          </p>
        </div>

        {/* DOM Manipulation */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">DOM Manipulation</h3>
          <p>
            JavaScript interacts with the DOM, allowing developers to dynamically update the content and structure of a web page.
            Methods like <code>getElementById</code> and <code>addEventListener</code> are commonly used for DOM manipulation.
          </p>
        </div>

        {/* Asynchronous JavaScript (Promises and Async/Await) */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Asynchronous JavaScript (Promises and Async/Await)</h3>
          <p>
            Asynchronous programming is crucial for handling operations that may take time, such as fetching data from a server.
            JavaScript uses promises and the async/await syntax to manage asynchronous tasks efficiently.
          </p>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};

export default JavaScriptPage;
