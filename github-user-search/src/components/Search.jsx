import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';


function Search() {
    const [formInput, setFormInput] = useState({ username: '', location: '', minRepos: '' });
    const [users, setUsers] = useState([]);
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
        <div className=' mx-auto max-w-4xl p-4'>
            <h2 className='text-2xl font-bold mb-4'>Search here</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Enter the GitHub username"
                    value={formInput.username}
                    name="username"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Enter the Location"
                    value={formInput.location}
                    name="location"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Enter the Repositories"
                    value={formInput.minRepos}
                    name="minRepos"
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                </div>
                <button type="submit"
                className="w-full md:w-auto bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600"
                >Search</button>
            </form>

            {loading && <p className="mt-4 text-blue-500">Loading...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
            
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
