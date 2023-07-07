import React, {useState, useEffect, useRef} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {Link} from 'react-scroll'
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2'
import Dropdown3 from './Dropdown3'
import Dropdown4 from './Dropdown4'
import Arena from './Arena'


const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    
  return (
    <nav className="z-10 top-0 flex justify-between items-center h-24 max-w-100vh mx-auto px-4 text-blue font-bold bg-gradient-to-r from-black to-gray-700">
        <div onClick={handleNav} className="block md:hidden" >
            {!nav ? <AiOutlineClose size={20} color='#000' /> : <AiOutlineMenu size={20} color='#fff'/>}
        </div>
          <ul className="hidden md:flex text-purple-100 p-8 text-lg items-center">
            <Link to="/"><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Home</li></Link>
            <Link to="/History"><a href='#/History'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">History</li></a></Link>
            <Link to="/Games"><a href='#/Games'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Games</li></a></Link>
            <Link to="/Books"><a href='#/Books'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Books</li></a></Link>
            <Link to='/contact'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Contact</li></Link>
          </ul>
      <div className="content-between">  
        <a href="https://elderscrolls.bethesda.net/en/" target="_blank"><h2 className="text-white text-3xl">The Elder Scrolls</h2></a>
        <div className={!nav ? "fixed left-0 top-0 w-[100%] h-full text-center p-8 mt-8 bg-gradient-to-r from-black to-gray-700 border-r border-r-gray-900 bg-purple-100 ease-in-out duration-200" : "fixed left-[-100%]"}>
          <ul className="p-4 text-white">
            <button onClick={handleNav}>Close</button>
            <Link to='/'><li onClick={handleNav} className="p-8 border-b border-gray-600">Home</li></Link>
            <Link to="/History"><a href='#/History'><li onClick={handleNav} className="p-8 border-b border-gray-600">History</li></a></Link>
            <Link to="/Games"><a href='#/Games'><li onClick={handleNav} className="p-8 border-b border-gray-600">Games</li></a></Link>
            <Link to="/Books"><a href='#/Books'><li onClick={handleNav} className="p-8 border-b border-gray-600">Books</li></a></Link>
            <Link to='/contact'><li onClick={handleNav} className="p-8 border-b border-gray-600">Contact</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar