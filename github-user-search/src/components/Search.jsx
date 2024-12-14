import React from 'react'
import { useState } from 'react'

function Search() {
    const [ usernames, setusernames] = useState();

    const handleSubmit =(e)=>{
        e.preventdefault();
    }

  return (
    <div>
        <h2>Search here</h2>
        <form onSubmit={handleSubmit}>
            <label></label>
            <input type="text" placeholder='Enter the GitHub username' value={usernames}
            onChange={(e)=>setusernames(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Search;