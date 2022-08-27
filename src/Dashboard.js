import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function Dashboard() {
  let params = useParams()
  return (
    <div>
      <center>
      <h2>Welcome to Dashboard page</h2><br />
      <h3>Name : {params.name}</h3>
      <Link to='/' className='Link'>Back to home</Link>
      </center>
    </div>
  )
}

export default Dashboard
