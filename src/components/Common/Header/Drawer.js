import React, { useContext, useState } from 'react';
import Drawer from '@mui/material/Drawer';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "./header.scss";
import { IconButton } from '@mui/material';
import ButtonComponent from '../Button/Button';
import { Link } from 'react-router-dom';
import ThemeSwitchBtn from '../ThemeSwitch/ThemeSwitchBtn';
import { ThemeContext } from '../../../context/ThemeContext';


export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}>
              <MenuRoundedIcon className='navLink'/>
          </IconButton>
        <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className='drawer'>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/compare'>Compare</Link>
                {/* <Link className='navLink' to='/watchlist'>Watchlist</Link> */}
                <Link className='navLink' to='/dashboard'>
                  {/* common button Component */}
                  <ButtonComponent text={"Dashboard "} 
                    onClick={()=>console.log("button clicked")}
                    outline={false}
                  />
                </Link> 
                <ThemeSwitchBtn onClick={toggleTheme}/>
            </div>
         </Drawer>
      
    </div>
  );
}
