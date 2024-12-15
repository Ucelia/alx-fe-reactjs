import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [formInput, setFormInput] = useState('');
    const [users, setUsers] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormInput({...formInput,[name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUsers([]);

        try {
            const data = await fetchUserData(formInput);
            setUsers(data.items);
        } catch (error) {
            setError(error.message || 'Oops! Cant find the user');
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className='bg-white mx-auto'>
            <h2>Search here</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter the GitHub username"
                    value={formInput.username}
                    name="username"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Enter the Location"
                    value={formInput.location}
                    name="location"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Enter the Repositories"
                    value={formInput.minRepos}
                    name="minRepos"
                    onChange={handleChange}
                />
                
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <img
                        src={userData.avatar_url}
                        alt={`${userData.login}'s avatar`}
                        width="100"
                    />
                    <h2>{userData.name || userData.login}</h2>
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Search;
