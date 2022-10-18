// import React from 'react'

// const App = () => {
//   const names = ["Bruce", "Clark", "Rahul"]
//   return (
//    <center>
//      <div>
//       {
//         names.map((name,index) => {return <h2 key={index}>{name}</h2>})
//       }
//     </div>
//    </center>
//   )
// }

// export default App

// import React,{useState} from 'react'
// const App = () => {
//   const [userName, setuserName] = useState('')

//   const handlerSubmit = (event) => {
//     event.preventDefault();
//     alert(`Form data is ${userName}`)
//   }
//   return (
//     <form onSubmit={handlerSubmit}>
//       <div>
//       <label>userName</label>
//       <input 
//         type='text'
//         value={userName}
//         onChange={(event) => setuserName(event.target.value)}
//         />
//       </div>
//       <button type='submit'>submit</button>
//     </form>
//   )
// }
//export default App

import React,{useState,useEffect} from "react";
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setPosts(data))
    .catch(err => console.log(err))
  },[]);

  return(
    <div className="primary">
      <ul>
        {
          posts.map((post) => {
            return <h1><li key = {post.id}>{post.body}</li></h1>
          })
        }
      </ul>
    </div>
  )
}

export default App