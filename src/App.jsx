import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Dropdown from './Components/Dropdown'
import './index.css'
import Footer from './Components/Footer'
import History from './Components/History'
import Arena from './Components/Arena'
import Contact from './Components/Contact'
import Daggerfall from './Components/Daggerfall'
import Morrowind from './Components/Morrowind'
import Oblivion from './Components/Oblivion'
import Skyrim from './Components/Skyrim'
import Games from './Components/Games'
import Books from './Components/Books'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <div>
      <BrowserRouter >
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/History" element={<History />} />
          <Route path="/Arena" element={<Arena />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Daggerfall" element={<Daggerfall />} />
          <Route path="/Morrowind" element={<Morrowind />} />
          <Route path="/Oblivion" element={<Oblivion />} />
          <Route path="/Skyrim" element={<Skyrim />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Books" element={<Books />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
