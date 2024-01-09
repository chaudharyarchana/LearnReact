import './App.css'
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ProjectData } from './Components/ProjectData';
import Sidebar from './Components/Sidebar.js';  
import { useState } from 'react';

const App = ()=>{
const[darkMode,setDarkMode] = useState(true)

    return (
      <>
      
    <div className={darkMode ? 'bg-gray-900' : 'bg-gray-200'}>
      < div >
    <Navbar  />

    </div>
    <div className='flex'>
     
       <div className=" items-center justify-between mt-5  w-11/12 ">
      <p className={darkMode ? 'text-white text-sm px-2 left-1/4 text-center ' : 'text-black px-2 text-sm mt-1 text-center'}>
           All these projects are based on React, React Hooks. Click on each project to learn more.
       </p>
       <div class="flex flex-wrap  items-center justify-evenly w-full ">
    {
           ProjectData.map((item)=>(
            <Card {...item} />
           ))
    }

    </div>

    </div>
    <div className='w-1/12'>
       <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>

    </div>

   
     <Footer/> 
  </div>
  </>

  )
}
export default App;