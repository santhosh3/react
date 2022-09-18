import React from 'react'
import {Link} from 'react-router-dom'
import './INDEX.css';

function dashboard() {
  return (
    <div>
      <center>
        <h3>Welcome to dashboard page</h3>
        <Link to='/' className='Link'>Home page</Link>
        <Link to='/about' className='Link'>About</Link>
      </center>
    </div>
  )
}

export default dashboard
