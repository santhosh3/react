import "./App.css";
import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import Cartd from "./components/Cart";
import React from "react";

function App() {

  return (
      <div className="App">
       <Header/>
       <Routes>
       <Route exact path='/' element={<Home/>}></Route>
       <Route exact path='/cart' element={<Cartd/>}></Route>
       </Routes>
      </div>
  );
}

export default App;