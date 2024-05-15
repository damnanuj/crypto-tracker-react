import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "./header.scss";
import { IconButton } from '@mui/material';


export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

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
              <a className='navLink' href='/'>Home</a>
              <a className='navLink' href='/'>Compare</a>
              <a className='navLink' href='/'>Watchlist</a>
              <a className='navLink dashBtn' href='/'>Dashboard</a>
          </div>
          </Drawer>
      
    </div>
  );
}
