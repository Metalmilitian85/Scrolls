import React from 'react'

export default function History() {
    return (
        <div id="/History" className="bg-black py-10">
            <h3 className="text-white text-3xl text-center pb-5">History of Tamriel</h3>
            <ul className="text-white text-center flex justify-center space-x-7 mb-5">
                <li><h3>Gods</h3></li>
                <li><h3>Locations</h3></li>
                <li><h3>Ages</h3></li>
            </ul>
            <div class="history" className="flex-col" >
                <img src="tamriel.jpg" className="w-[60%] mx-auto" />
                <p>Tamriel is the fictional continent where the events of the Elder Scrolls games take place. 
                    It is located on the planet of Nirn (which means the arena or the battleground), otherwise known 
                    as Mundus; which is the mortal realm of the finite and the partial, as opposed to the immortal realms 
                    of the infinite and the absolute. In the Elder Scrolls, Mundus is the Elvish root for the human word 
                    "mundane", meaning ordinary. The name Tamriel is said to mean 'Starry Heart', however, according to Arena, 
                    it really is Elvish for 'Dawn's Beauty'.</p>
            </div>
        </div>
    )
}