import { CircularProgress } from '@mui/material'
import React from 'react'
import "./style.scss"

const Loader = () => {
  return (
    <div className='loader-container'>
        <CircularProgress/>
    </div>
  )
}

export default Loader
