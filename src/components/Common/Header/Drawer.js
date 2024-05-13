import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "./header.scss";


export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);


  
  return (
    <div style={{color:'white'}}>
      
          <Button onClick={()=>setOpen(true)}><MenuRoundedIcon/></Button>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>setOpen(false)}
          >
           <h1>Hiiiiiiii</h1>
          </Drawer>
      
    </div>
  );
}
