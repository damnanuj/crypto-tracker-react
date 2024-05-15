import React from 'react'
import "./header.scss"
import AnchorTemporaryDrawer from './Drawer'
import Button from '../Button/Button'
const Header = () => {
  return (
    <div className='navbar'>
        <h1 className='logo'>
          CryptoTracker<span style={{color: "#007bff"}}>.</span>
        </h1>
        <div className='navLinks'>
          <a className='navLink' href='/'>Home</a>
          <a className='navLink' href='/'>Compare</a>
          <a className='navLink' href='/'>Watchlist</a>
          <a className='navLink' href='#'>
            <Button text={"Dashboard "} 
              onClick={()=>console.log("button clicked")}
              outline={false}
            />
          </a>
         
         
        </div>
        <div className='mobileMenu'>
          <AnchorTemporaryDrawer/>
        </div>
    </div>
  )
}

export default Header
