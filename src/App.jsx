/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import MainAbout from './Pages/MainAbout'
import WhatWeDo from './Components/aboutsection/WhatWeDo'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/mainabout' element={<MainAbout />} />
          <Route path='/whatwedo' element={<WhatWeDo />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App