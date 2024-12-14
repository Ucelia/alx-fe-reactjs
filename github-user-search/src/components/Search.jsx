import React from 'react'
import { useState } from 'react'

function Search() {
    const [ usernames, setusernames] = useState();

    const handleSubmit =(e)=>{
        e.preventDefault();
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

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
            <div>
                <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
                <h2>{userData.name || userData.login}</h2>
                <p>
                    <a href={userData.html_url} target='_blank' rel=''>View Profile</a>
                </p>
            </div>
        )}
    </div>
  )
}

export default Search;