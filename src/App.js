// import React,{useState} from 'react'
// import './App.css'
// import Counter from './Counters'

// function App() {
//   const [state, setState] = useState([
//     {id:0,value:0},{id:1,value:0},{id:2,value:0},{id:3,value:0}
//   ])  
//   const Increment = (e) => {
//      const counters = [...state];
//      counters[e].value++
//      setState(counters)
//   }
//   const Decrement = (e) => {
//     const counters = [...state];
//     counters[e].value--
//     setState(counters)
//   }
//   const deleteHandler = (e) => {
//     const counters = state.filter((c) => c.id != e)
//     setState(counters)
//   }
//   const reload = (e) => {
//     window.location.reload();
//   }

//   return (
//     <div>
//      <center>
//       <div className='flex'>
//       <div className='Navbar'>cart</div>
//       <div className='Navbar value'>{state.filter(e => e.value > 0).length}</div> 
//       <div className='Navbar'>Items</div>
//       </div>
//       <button className='btn' onClick={reload}>refresh</button><br></br>
//       { 
//         state.map(e => 
//           <div key={e.id}>
//             <span className='element_value'>{e.value > 0?e.value:"Zero"}</span>&nbsp;&nbsp;&nbsp;&nbsp;
//             <button className='btn' onClick={() => Increment(e.id)}>+</button>
//             <button className='btn' onClick={() => Decrement(e.id)}>-</button>
//             <button className='btn' onClick={() => deleteHandler(e.id)}>delete</button>
//           </div>
//           )
//       }
//      </center>
//     </div>
//   )
// }

// export default App

import React,{useState} from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [state, setState] = useState([
    {id:0,value:0},{id:1,value:0},{id:2,value:0},{id:3,value:0}
  ])  
  const Increment = (e) => {
     const counters = [...state];
     counters[e].value++
     setState(counters)
  }
  const Decrement = (e) => {
    const counters = [...state];
    counters[e].value--
    setState(counters)
  }
  const deleteHandler = (e) => {
    console.log("delete is running")
    const counters = state.filter((c,i) => i != e)
    setState(counters)
  }
  const reload = (e) => {
    window.location.reload();
  }

  console.log(state)

  return (
    <div>
     <center>
      <div className='flex'>
      <div className='Navbar'>cart</div>
      <div className='Navbar value'>{state.filter(e => e.value > 0).length}</div> 
      <div className='Navbar'>Items</div>
      </div>
      <button className='btn' onClick={reload}>refresh</button><br></br>

      {
        state.map((e, index) => (
          <Counter 
          key = {index}
          index = {index}
          item = {e}
          Increment = {Increment}
          Decrement = {Decrement}
          DeleteHandler = {deleteHandler}
          />
        ))
      }
     </center>
    </div>
  )
}

export default App
