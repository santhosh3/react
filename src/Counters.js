import React,{useState} from 'react'
import Counter from './Counter'

function Counters() {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  const [state3, setState3] = useState(0)
  const [state4, setState4] = useState(0)
  const Increment = () => {
        setState1(state1+1)
  }
  const Decrement = () => {
        setState1(state1-1)
  }
  return (
    <div>
      <center>
      <Counter count={state1} Increment={Increment} Decrement={Decrement}/>
      <Counter count={state2} Increment={Increment} Decrement={Decrement}/>
      <Counter count={state3} Increment={Increment} Decrement={Decrement}/>
      <Counter count={state4} Increment={Increment} Decrement={Decrement}/>
      </center>
    </div>
    
  )
}

export default Counters
