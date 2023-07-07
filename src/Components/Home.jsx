import React from 'react'
import History from './History'

export default function Home() {
    return (
        <div className="homebg">
            <h3>Home</h3>
            <img src="skyrimbg.webp" className="w-[75%] mx-auto p-4 pt-24" />
            <div>
            <iframe width="560" height="315" src="https://youtu.be/47-TGIzmTrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}