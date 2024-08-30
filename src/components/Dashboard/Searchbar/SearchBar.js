import React, { useContext } from 'react'
import "./style.scss"
import { ThemeContext } from '../../../context/ThemeContext'

const SearchBar = ({search, onSearchChange}) => {

  const {theme} = useContext(ThemeContext)
 
  return (
    <div className={`srchBar-container ${theme ==='light'? 'light':""}`}>
      <span className='material-icons srch-icon'>search</span>
      <input
          placeholder='Search a coin name'
          type='text'
          value={search}
          onChange={(e)=>onSearchChange(e)}
       />
    </div>
  )
}

export default SearchBar
