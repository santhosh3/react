import React,{useState} from "react";
import Text from "./test";

function App() {
  const [data,setData] = useState({
    name : "raju",
    Age : 23
  })
  const {name,Age} = data
  return (
    <div>
      <center>
        <Text name = {name} and Age = {Age}/>
      </center>
    </div>
  );
}

export default App;
