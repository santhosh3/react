import React from 'react'
import {Link} from 'react-router-dom'
import './INDEX.css'

const about = () => {
  return (
    <div>
        <center>
            <h3>You are in About page</h3>
            <Link to='/' className='Link'>Back to home</Link>
        </center>
    </div>
  )
}

export default about
