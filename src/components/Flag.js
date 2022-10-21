import React from 'react'
import Img from '../ReusableComponent'
import './style.css'

const Flag = ({props}) => {
  
  return (
    <div className='sub-container'>
          <Img className='Image'src={props.flags.png}/>
          <div className='content'>
          <h2>{props.name}</h2>
          <h3 className='items'>Population: <span>{props.population}</span></h3>
          <h3 className='items'>Region: <span>{props.region}</span></h3>
          <h3 className='items'>Capital: <span>{props.capital}</span></h3>
          </div>
    </div>

  )
}

export default Flag