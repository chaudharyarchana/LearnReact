import React, { useState } from 'react';

const Navbar = ({
  darkMode

}) => {


  return (
    <nav className={`bg-gray-800 px-2 w-full   py-5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white font-bold text-lg pl-2">Learn React</div>
        </div>
        
        <div className={`flex items-center space-x-4 pr-2 `}>
          <a href="/" className="text-white hover:text-gray-300">Projects</a>
          <a href="/blog" className="text-white hover:text-gray-300">Blogs</a>

        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
