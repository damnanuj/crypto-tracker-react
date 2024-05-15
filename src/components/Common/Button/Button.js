import React from 'react'
import "./button.scss"
const Button = ({text, onClick, outline}) => {
  return (
    <div className={outline ? "outlinedBtn": "dashBtn"} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button
