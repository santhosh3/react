import React from 'react'
import {Link} from 'react-router-dom'
import './INDEX.css';

function home() {
  const user = 'John kumar Reddy'
  return (
    <div>
      <center>
        <h3>Welcome to Home page</h3>
        <Link to={`/dashboard/${user}`} className='Link'>Dashboard</Link>
        <Link to='/about' className='Link'>About</Link>
      </center>
    </div>
  )
}

export default home
