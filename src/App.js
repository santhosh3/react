import React,{useState} from "react";
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from "./Dashboard";
import Home from "./Home";
import About from "./About";
function App() {

  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/Dashboard/:name' element={<Dashboard/>}/>
        <Route path = '/About' element={<About/>} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
