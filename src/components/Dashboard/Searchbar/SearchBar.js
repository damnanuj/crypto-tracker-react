import React from 'react'
import "./style.scss"

const SearchBar = ({search, onSearchChange}) => {
 
  return (
    <div className='srchBar-container'>
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
