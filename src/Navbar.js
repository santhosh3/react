import React from 'react'

function Navbar(totalCounters) {
  return (
    <nav>
        <div>
            shoping Cart
            <span>{totalCounters}</span>
        </div>
        Items
    </nav>
  )
}

export default Navbar
