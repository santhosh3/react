import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
      <center>
        <h2>Welcome to About page</h2>
        <Link to='/' className='Link'>Back to home</Link>
      </center>
    </div>
  )
}

export default About
