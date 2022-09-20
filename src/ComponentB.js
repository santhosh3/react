import React, { useContext } from 'react'
import { store } from './App';

const ComponentB = () => {
  const [data,setData] = useContext(store);
  return (
    <div>
      componentB {data}
    </div>
  )
}

export default ComponentB
