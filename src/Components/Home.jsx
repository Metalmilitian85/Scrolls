import React from 'react'

export default function Home() {
    return (
        <div>
            <h3 className="text-3xl text-center text-white mt-3">Welcome</h3>
            <h3 className="mx-8 mt-8 text-2xl text-white text-center">This page has all the information you'll need on The Elder Scrolls history for the main games and books.</h3>
            <div className="videoWrapper">
                <iframe width="1120" height="630" src="https://www.youtube.com/embed/JSRtYpNRoN0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}