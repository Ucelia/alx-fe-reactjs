import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [formInput, setFormInput] = useState({ username: '', location: '', minRepos: '' });
    const [users, setUsers] = useState([]);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormInput((prevState) => ({ ...prevState, [name]: value }));    };

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
            
                <div>
                {users.map((user) => (
                    <div key={user.id} className="flex items-center mb-4 border p-4 rounded">
                        <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full" />
                        <div className="ml-4">
                            <h3 className="text-lg font-bold">{user.login}</h3>
                            {user.location && <p className="text-sm text-gray-600">Location: {user.location}</p>}
                            <p className="text-sm text-gray-600">Public Repos: {user.public_repos || 'N/A'}</p>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    );
}

export default Search;
