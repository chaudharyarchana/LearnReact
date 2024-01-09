import { Route,Routes } from "react-router-dom"
import Home from './Home'
import Menu from './pages/Menu/Menu'
import Tour from './pages/Tours/Tours'
import Review from './pages/Review'
import Stopwatch from './pages/stopwatch/Stopwatch'
import Questions from './pages/Questions'
import Birthday from './pages/birthdaybuddy/Birthdaybuddy'
import WeatherApp from './pages/weather/WeatherApp'
import Calculator from './pages/calculator/Calci'
import Cart from './pages/ReduxCart/Product'
import Currency from './pages/currency/App'
import Blog from "./pages/blog/Html.js";
import HtmlPage from  "./pages/blog/Html.js"
import CssPage from  "./pages/blog/Css.js"
import Javascript from  "./pages/blog/Javascript.js"



const App = () =>{
  return(
    <>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/blog" element={<Blog/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/weather' element={<WeatherApp/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/birthday' element={<Birthday/>}/>
        <Route path='/stopwatch' element={<Stopwatch/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/currency' element={<Currency/>}/>
        <Route path='/blog/html' element={<HtmlPage/>} />

        <Route path='/blog/css' element={<CssPage/>} />
        <Route path='/blog/javascript' element={<Javascript/>} />



      </Routes>
    </>
  )
}

export default App