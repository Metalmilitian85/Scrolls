import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Dropdown from './Components/Dropdown'
import './index.css'
import Footer from './Components/Footer'
import History from './Components/History'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <History />
        <Routes>
          <Route path="/" />
          <Route path="/History" element={<History />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
