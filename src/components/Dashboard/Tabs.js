import React, { useState } from "react";
import "./tabs.scss";
import "../../colors.scss"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from "@mui/material";
import GridComponent from "./Grid";
import { dummyData } from "../../pages/dummyData";


const TabsComponent = () => {
    const [value, setValue] = useState('grid');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const tabStyel = {
      color:  "var(--dark-light-text-color)",
      fontWeight : 600,
      fontSize : "1rem",
      fontFamily : "Inter"
    }

    const theme = createTheme({
      palette:{
        primary:{
          main : "#007bff"
        }
      }
    })
  
    return (
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <div>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
              <Tab sx={tabStyel} label="Grid" value="grid" />
              <Tab sx={tabStyel} label="List" value="list" />
             
            </TabList>
          </div>
          <TabPanel value="grid" >
            <div className="grid-container">
            {
              dummyData.map((coin,i)=>{
                return (
                 <GridComponent key={i} coin={coin}/>
                )
              })
            }
            </div>
            
          </TabPanel>
          <TabPanel value="list">
            {/* {
                coins.map(item=>{
                  return (
                     <p key={item.id}>{item.name}</p>
                  )
                })
              } */}
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    );
};

export default TabsComponent;
