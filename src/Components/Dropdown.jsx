import React from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import list from './list.json'
import {useState} from 'react'

export default function Dropdown() {

    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="mx-auto relative flex flex-col w-full bg-none">
            <button onClick={handleOpen} className="bg-none p-2 w-[120px] flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >
                Games
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />

                ): (
                    <AiOutlineCaretUp className="h-8" />
                )
            }
            </button>

            {isOpen && (
                <div className="bg-black absolute top-20 flex flex-col items-start border-solid rounded border-4 border-gray-400 p-2 w-[150px]">
                    {list.map((item) => (
                        <div className="flex w-full justify-between p-2 hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                            <h3 className="font-bold">{item.type}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}