import React from 'react'
import {Link} from 'react-router-dom'
import './INDEX.css';

function home() {
  return (
    <div>
      <center>
        <h3>Welcome to Home page</h3>
        <Link to='/dashboard' className='Link'>Dashboard</Link>
        <Link to='/about' className='Link'>About</Link>
      </center>
    </div>
  )
}

export default home
