import React from 'react'
import './index.css';


const SearchBar = ({handleChange,handleKey}) => {

    return <>

    <input  type='text' onKeyDown={handleKey} onChange={handleChange} className='input' ></input>

    </>

}

export default SearchBar