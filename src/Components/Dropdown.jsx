import React from 'react'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'
import list from './list.json'
import {useState, useEffect, useRef} from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Dropdown() {

    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    /* const closeMenu = () => {
        const closeDropdown = setIsOpen(!false)
        document.addEventListener('mousedown', closeDropdown)
    }
    */

    return (
        <div className="mx-auto relative flex flex-col w-full bg-none z-10" >
            <button onClick={handleOpen} className="bg-none p-2 w-[120px] flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >
                Games
                {!isOpen ? (
                    <AiOutlineCaretRight className="h-8" />

                ): (
                    <AiOutlineCaretLeft className="h-8" />
                )
            }
            </button>

            {isOpen && (
                <div className="bg-black absolute left-[150px] flex flex-col items-start border-solid rounded border-4 border-gray-400 p-2 w-[150px]" >
                        <div className="flex w-full justify-between p-2">
                            <ul>
                                <li className=" hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"><Link to="/Arena">Arena</Link></li>
                                <li className=" hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"><Link to="/Daggerfall">Daggerfall</Link></li>
                                <li className=" hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"><Link to="/Morrowind">Morrowind</Link></li>
                                <li className=" hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"><Link to="/Oblivion">Oblivion</Link></li>
                                <li className=" hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"><Link to="/Skyrim">Skyrim</Link></li>
                            </ul>
                        </div>
                </div>
            )}
        </div>
    );
}