import React from 'react'
import {Link} from 'react-router-dom'
import './INDEX.css';
import { useParams} from 'react-router-dom'

function dashboard() {
 let params = useParams()
  return (
    <div>
      <center>
        <h3>Welcome to dashboard page</h3>
        <p> Name : {params.name}</p>
        <Link to='/' className='Link'>Home page</Link>
        <Link to='/about' className='Link'>About</Link>
      </center>
    </div>
  )
}

export default dashboard
