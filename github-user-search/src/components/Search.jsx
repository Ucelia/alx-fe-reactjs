import React from 'react'
import { useState } from 'react'
import fetchUserData from '../services/githubService';

async function Search() {
    const [ usernames, setUsernames] = useState();
    const [ userData, setUserData] = useState(null);
    const [ loading, setLoading] = useState(false);
    const [ error, setError] = useState(null);

    const handleSubmit =async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null);
    }

    try {
        const data = await fetchUserData(usernames);
        setUserData(data);
    } catch (error) {
        setError('Looks like we cant find the user')
    } finally {
        setLoading(false);
    }

  return (
    <div>
        <h2>Search here</h2>
        <form onSubmit={handleSubmit}>
            <label></label>
            <input type="text" placeholder='Enter the GitHub username' value={usernames}
            onChange={(e)=>setUsernames(e.target.value)}
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