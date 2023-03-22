import React from 'react'

function Button = ({bgclr,clr,name, onClick}) => {
  return (
     <button 
     style = {{backgroundColor:bgclr, color:clr }}
      className = 'my-btn'
      onClick={onClick}>
      {name}
      </button>
  )
}

export default Button