import React from 'react'
import Arena from './Arena'
import Daggerfall from './Daggerfall'
import Morrowind from './Morrowind'
import Oblivion from './Oblivion'
import Skyrim from './Skyrim'

export default function Games() {
    return (
        <div id="/History" className="bg-black py-10">
          <div className="nav2">
            <h3 className="text-white text-3xl text-center pb-5">GAAAAAAMES</h3>
            <ul className="text-white text-center flex justify-center space-x-7 mb-5">
                <a href="#Arena"><li><h3 className="hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Arena</h3></li></a>
                <a href="#Daggerfall"><li><h3 className="hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Daggerfall</h3></li></a>
                <a href="#Morrowind"><li><h3 className="hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Morrowind</h3></li></a>
                <a href="#Oblivion"><li><h3 className="hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Oblivion</h3></li></a>
                <a href="#Skyrim"><li><h3 className="hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Skyrim</h3></li></a>
            </ul>
          </div>
            <div class="history" className="flex-col" >
                <img src="tamriel.jpg" className="w-[60%] mx-auto pt-16" />
                <p className="text-white m-8">Games Games Games Info</p>
                <Arena />
                <Daggerfall />
                <Morrowind />
                <Oblivion />
                <Skyrim />
            </div>
        </div>
    )
}