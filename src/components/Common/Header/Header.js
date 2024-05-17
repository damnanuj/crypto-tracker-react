import React from 'react'
import "./header.scss"
import AnchorTemporaryDrawer from './Drawer'
import { Link } from 'react-router-dom'
import ButtonComponent from '../Button/Button'


const Header = () => {
  return (
    <div className='navbar'>
        <Link to="/">
          <h1 className='logo'>
            CryptoTracker<span style={{color: "#007bff"}}>.</span>
          </h1>
        </Link>
        {/* NavLinks with routes */}
        <div className='navLinks'>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/compare'>Compare</Link>
          <Link className='navLink' to='/watchlist'>Watchlist</Link>
          <Link className='navLink' to='/dashboard'>
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
