import React from 'react'
import "./wrongRoute.scss"
import { Link } from 'react-router-dom'
import ButtonComponent from '../components/Common/Button/Button'


const WrongRoute = () => {
  return(
    <div  className='wrongRoutePage'>
        <p className='oop'>OOPS, Looks Like You Picked A Wrong Route </p>
        <div>
            <h1 className='four'>4</h1>
            <span className='material-icons sadEmoji'>sentiment_very_dissatisfied</span>
            <h1 className='four'>4</h1>
        </div>
        <p className='oop'>Let's Go Back To Home Together</p>
        <Link className='home' to ="/"><ButtonComponent text={"Let's Go"} outline={false} /></Link>
      
    </div>
  )
}

export default WrongRoute
