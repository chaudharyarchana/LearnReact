import { Link } from "react-router-dom"

const Sidebar = () =>{
  return(
  <>
           <div className='w-3/12 sm:w-2/12 bg-black text-white  py-10 my-auto fixed ' style={{height:"100%",marginTop:"69px"}}>
       <div className="w-fit mx-auto text-center ">

          <Link to="/blog" className='block py-3'>HTML</Link> 
         <Link to="/blog/css"  className='block py-3' >CSS</Link> 
         <Link to="/blog/javascript" className='block py-3'>Javascript</Link> 
         </div>
</div>
  </>)
}

export default Sidebar