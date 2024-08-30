import React, { useContext } from 'react'
import "./button.scss"
import { ThemeContext } from '../../../context/ThemeContext'

const ButtonComponent = ({ text, onClick, outline }) => {
  const { theme } = useContext(ThemeContext);

  // Construct the className dynamically
  const buttonClass = `${outline ? 'outlinedBtn' : 'dashBtn'} ${theme === 'light' ? 'light' : ''}`;

  return (
    <div className={buttonClass} onClick={onClick}>
      {text}
    </div>
  )
}

export default ButtonComponent;
