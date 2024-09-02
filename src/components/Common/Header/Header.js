import React, { useContext } from 'react'
import "./header.scss"
import AnchorTemporaryDrawer from './Drawer'
import { Link } from 'react-router-dom'
import ButtonComponent from '../Button/Button'
import ThemeSwitchBtn from '../ThemeSwitch/ThemeSwitchBtn'
import { ThemeContext } from '../../../context/ThemeContext'


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`navbar ${theme ==='light' ? 'light': ""}` }>
        <Link to="/">
          <h1 className={`logo ${theme ==='light' ? 'light': ""}`}>
            CryptoTracker<span style={{color: "#007bff"}}>.</span>
          </h1>
        </Link>
        {/* NavLinks with routes */}
       
        <div className='navLinks'>
        <ThemeSwitchBtn onClick={toggleTheme}/>
          <Link className={`navLink ${theme ==='light' ? 'light': ""}`} to='/'>Home</Link>
          <Link className={`navLink ${theme ==='light' ? 'light': ""}`} to='/compare'>Compare</Link>
          {/* <Link className={`navLink ${theme ==='light' ? 'light': ""}`} to='/watchlist'>Watchlist</Link> */}
          <Link className={`navLink ${theme ==='light' ? 'light': ""}`} to='/dashboard'>
            {/* common button Component */}
            <ButtonComponent text={"Dashboard "} 
              onClick={()=>console.log("button clicked")}
              outline={false}
            />
          </Link>
        </div>

        {/* this is for mobile view */}
        <div className='mobileMenu'>
          <AnchorTemporaryDrawer/>
        </div>
    </div>
  )
}

export default Header
