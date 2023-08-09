import React from 'react'
import Gods from './Gods'
import Locations from './Locations'
import Ages from './Ages'
import { Link } from 'react-scroll'

export default function History() {
    return (
        <div id="/History" className="bg-black py-10">
          <div className="nav2 bg-gradient-to-b from-gray-700 to-gray-400">
            <h3 className="text-white text-xl text-center pb-1">History of Tamriel</h3>
            <ul className="text-white text-center flex justify-center space-x-6 mb-5">
                <Link to="Gods" spy={true} smooth={true} offset={-180} duration={500}><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Gods</h3></li></Link>
                <Link to="Locations" spy={true} smooth={true} offset={-180} duration={500}><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Locations</h3></li></Link>
                <Link to="Ages" spy={true} smooth={true} offset={-180} duration={500}><li><h3 className="text-sm hover:underline hover:cursor-pointer decoration-solid decoration-yellow-500 decoration-2">Ages</h3></li></Link>
            </ul>
          </div>
            <div class="history" className="flex-col" >
                <img src="tamriel.jpg" className="w-[60%] mx-auto pt-16" />
                <p className="text-white m-8">Tamriel is the fictional continent where the events of the Elder Scrolls games take place. 
                    It is located on the planet of Nirn (which means the arena or the battleground), otherwise known 
                    as Mundus; which is the mortal realm of the finite and the partial, as opposed to the immortal realms 
                    of the infinite and the absolute. In the Elder Scrolls, Mundus is the Elvish root for the human word 
                    "mundane", meaning ordinary. The name Tamriel is said to mean 'Starry Heart', however, according to Arena, 
                    it really is Elvish for 'Dawn's Beauty'.</p>
                <img className="mx-auto mt-24" src="./divider.jpg" />
                <Gods />
                <img className="mx-auto mt-24" src="./divider.jpg" />
                <Locations />
                <img className="mx-auto mt-24" src="./divider.jpg" />
                <Ages />
            </div>
        </div>
    )
}