import React from 'react'
import './App.css'

function Counter(props) {
  return (
    <div>
    {props.value}
    <button onClick={props.Increment(props.id)}>+</button>
    <button onClick={props.Decrement(props.id)}>-</button>
    <button onClick={props.Delete(props.id)}>delete</button>
    </div>
  )
}

export default Counter
