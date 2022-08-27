import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function Home() {
  let user = 'John'
  return (
    <div>
        <center>
            <h2>Welcome to Home page</h2>
            <Link to={`/Dashboard/${user}`} className='Link'>Dashboard</Link><br /><br />
            <Link to='/About' className='Link'>About</Link>
        </center>
    </div>
  )
}

export default Home