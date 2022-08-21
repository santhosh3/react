import React from "react";
import Navbar from './Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './about'
import Dashboard from './Dashboard';
function App(){
  return (
    <div>
      <h1>CREATING MULTIPAGE APPLICATIONS</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/Home" element = {<Home/>} />
        <Route path = "/About" element = {<About/>} />
        <Route path = "/Dashboard/:name" element = {<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App