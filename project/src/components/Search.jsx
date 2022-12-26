import React from 'react'

const Search = ({ search, handleChange }) => {
  return (
    <center>
      <div className='search'>
        <h3 className='search_title'>Search your favorite cocktail here</h3>
        <input type='text' value={search} onChange={handleChange} className='search_input' />
      </div>
    </center>)
}
export default Search