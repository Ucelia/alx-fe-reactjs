import React from 'react'
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App