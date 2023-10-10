import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Main from './pages/main'
import Contact from './pages/contact'

const RoutersJS  = () => {
  return(
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contato" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default RoutersJS;