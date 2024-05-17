import React from 'react'
import "./button.scss"
const ButtonComponent = ({text, onClick, outline}) => {
  return (
    <div className={outline ? "outlinedBtn": "dashBtn"} onClick={onClick}>
      {text}
    </div>
  )
}

export default ButtonComponent
