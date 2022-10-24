import React from 'react'

function Counter({Increment, Decrement, DeleteHandler,item,index}) {
  return (
    <div>
      <h1>{item.value}</h1>
      <button className='btn' onClick={(e) => Increment(index)}>+</button>
      <button className='btn' onClick={(e) => Decrement(index)}>-</button>
      <button className='btn' onClick={(e) => DeleteHandler(index)}>Delete</button>
    </div>
  )
}

export default Counter
