import React, { useContext } from 'react'
import { store } from './App';

const ComponentA = () => {
  const [data,setData] = useContext(store);
  return (
    <div>
      componentA {data}
    </div>
  )
}

export default ComponentA
