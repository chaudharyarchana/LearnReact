import IMAGES from "../images";

const Sidebar =({
  setDarkMode,
  darkMode
}) =>{

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

    return <>
    <div className="w-full h-full  pt-24  bg-gray-800 " style={{height:"100%"}}>
        <div className="flex flex-col justify-evenly h-80 mx-auto  w-fit">
          <div
            className={`cursor-pointer text-sm sm:text-2xl  ${darkMode ? 'text-yellow-400' : 'text-gray-400'}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? '🌙' : '☀️'} </div>
      <img src={IMAGES.github} className="w-5 sm:w-8 py-3"/>
      <img src={IMAGES.education} className="w-5 sm:w-8 py-3"/>
      
      <img src={IMAGES.linkedin} className="w-5 sm:w-8 py-3"/>    

    </div>
    </div>
    </>
}

export default Sidebar ; 