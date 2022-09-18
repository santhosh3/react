import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './about'
import Dashboard from './dashboard'
import Home from './home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard/:name' element={<Dashboard />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
