import React from 'react'
import "./main.scss"
import phone from "../../../assets/phone 1.png"
import gradient from "../../../assets/gradient 1.png"
import {motion} from "framer-motion"
import ButtonComponent from '../../Common/Button/Button'
import { Link } from 'react-router-dom'
const Main = () => {
  
  return (
    <div className='mainContainer'>
        <div className='leftPart'>
            <motion.h1 className='trackHeading'
                initial={{opacity:0, x:-200}}
                animate={{opacity:1, x:0}}
                transition={{duration:0.8}}
                >Track Crypto
            </motion.h1>

            <motion.h1 className='realTimeHeading'
              initial={{opacity:0, x:-150}}
              animate={{opacity:1, x:0}}
              transition={{duration:0.8 , delay:0.4}}
                >Real Time.
            </motion.h1>

            <p className='info'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
            <div className='landingPageBtns'>
                <Link className='navLink' to='/dashboard'>
                    <ButtonComponent text={"Dashboard"} outline={false}/>
                </Link>
                <Link>
                    <ButtonComponent text={"Share"} outline={true}/>
                </Link>   
            </div>
        </div>
        <div className='rightPart'>
            <motion.img 
              src={phone} 
              className='phone'
              initial={{y:-20}}
              animate={{y:20}}
              transition={{
                type:"smooth",
                repeat:Infinity,
                repeatType:"mirror",
                duration:2
              }}
            />
              
            <img src={gradient} className='gradient'/>
        </div>
    </div>
  )
}

export default Main
