import React from 'react'

function ReusableComponent(props) {
  return (
      <div style={{display:'inline'}}>
        <img src={props.src} alt='flagIsMissing' height={200} width={350}/>
      </div>
  )
}

export default ReusableComponent
