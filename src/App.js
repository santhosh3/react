import React from 'react'
import Countries from './components/Countries'
import Navbar from './components/Navbar'
import Filter from './components/Filter'

function App() {

  return (
    <div>
      <Navbar/>
      <Filter/>
      <Countries />
    </div>
  )
}

export default App
