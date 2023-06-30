import React, {useState, useEffect, useRef} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
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
            <Dropdown3 />
            <Dropdown4 />
            <Link to='/contact'><li className="p-4 hover:text-purple-200 hover:scale-105 duration-300">Contact</li></Link>
          </ul>
      <div className="content-between">  
        <h2 className="text-white text-3xl">The Elder Scrolls</h2>
        <div className={!nav ? "fixed left-0 top-0 w-[40%] h-full bg-gradient-to-r from-black to-gray-700 border-r border-r-gray-900 bg-purple-100 ease-in-out duration-200" : "fixed left-[-100%]"}>
          <ul className="p-4 text-white">
            <button onClick={handleNav}>Close</button>
            <Link to='/'><li onClick={handleNav} className="p-4 border-b border-gray-600">Home</li></Link>
            <Link to="/History"><a href='#/History'><li onClick={handleNav} className="p-4 border-b border-gray-600">History</li></a></Link>
            <div className="border-b border-gray-600">
              <Dropdown />
            </div>
            <div className="border-b border-gray-600">
              <Dropdown2 />
            </div>
            <Link to='/contact'><li onClick={handleNav} className="p-4 border-b border-gray-600">Contact</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar