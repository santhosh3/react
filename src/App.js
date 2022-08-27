import React,{useState} from "react";
import Img from "./img";
import './App.css';

function App() {
  const arr = [
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/09/16/20/52/gorilla-448731__340.jpg"
  ]  
  return (
    <div style={{display:"flex"}}>
      {arr.map((item,index) => <Img key = {index} src={item} />)}
    </div>
  )
}

export default App;
