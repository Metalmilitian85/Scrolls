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
            <h3 className="text-white text-xl text-center pb-1">GAMES</h3>
            <ul className="text-white text-center flex justify-center space-x-6 mb-5">
                <a href="#Arena"><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Arena</h3></li></a>
                <a href="#Daggerfall"><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Daggerfall</h3></li></a>
                <a href="#Morrowind"><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Morrowind</h3></li></a>
                <a href="#Oblivion"><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Oblivion</h3></li></a>
                <a href="#Skyrim"><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Skyrim</h3></li></a>
            </ul>
          </div>
            <div class="history" className="flex-col" >
                <img src="eso.webp" className="w-[60%] mx-auto pt-16" />
                <p className="text-white m-8">Games Games Games Info</p>
                <Arena />
                <img className="mx-auto mt-24" src="./divider.jpg" />
                <Daggerfall />
                <img className="mx-auto mt-24" src="./divider.jpg" />
                <Morrowind />
                <img className="mx-auto mt-24" src="./divider.jpg" />
                <Oblivion />
                <img className="mx-auto pb-48" src="./divider.jpg" />
                <Skyrim />
            </div>
        </div>
    )
}