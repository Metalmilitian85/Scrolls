import React from 'react'
import Infernal from './Infernal'
import Souls from './Souls'

export default function Books() {
    return (
        <div id="/Books" className="bg-black py-10">
          <div className="nav2">
            <h3 className="text-white text-xl text-center pb-1">BOOKS</h3>
            <ul className="text-white text-center flex justify-center space-x-6 mb-5">
                <a href="#Infernal"><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">The Infernal City</h3></li></a>
                <a href="#Souls"><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Lord of Souls</h3></li></a>
            </ul>
          </div>
            <div class="history" className="flex-col" >
                <img src="twoscrolls.jpg" className="w-[60%] max-w-2xl mx-auto pt-16" />
                <p className="text-white m-8">In 2009, science-fiction author Gregory Keyes released The Infernal City, 
                a novel set approximately 40 years after the Oblivion Crisis. Lord of Souls was released in 2011 as Keyes's 
                second novel in his The Elder Scrolls book series.</p>
                <img className="mx-auto mt-24" src="./divider.jpg" />
                <Infernal />
                <img className="mx-auto mt-24" src="./divider.jpg" />
                <Souls />
            </div>
        </div>
    )
}