import React, {useState, useEffect} from "react";
import axios from 'axios'
function App(){
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      response => setData(response.data)
    )
  },[])
  return (
    <div>
      {data.map(items => <li key = {items.id}>{items.title}</li>)}
    </div>
  )

}
export default App