import React from 'react'
import "./main.scss"
import Button from '../../Common/Button/Button'
import phone from "../../../assets/phone 1.png"
import gradient from "../../../assets/gradient 1.png"
const Main = () => {
  return (
    <div className='mainContainer'>
        <div className='leftPart'>
            <h1 className='trackHeading'>Track Crypto</h1>
            <h1 className='realTimeHeading'>Real Time.</h1>
            <p className='info'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
            <div className='landingPageBtns'>
                <Button text={"Dashboard"} outline={false}/>
                <Button text={"Share"} outline={true}/>
            </div>
        </div>
        <div className='rightPart'>
            <img src={phone} className='phone'/>
            <img src={gradient} className='gradient'/>
        </div>
    </div>
  )
}

export default Main
