import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [formInput, setFormInput] = useState({ username: "", location: "", minRepos: "" });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure at least one field is filled
    if (!formInput.username && !formInput.location && !formInput.minRepos) {
      setError("Please fill at least one field to search.");
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(formInput);
      setUsers(data.items || []);
      if (!data.items.length) {
        setError("No users found. Try different search criteria.");
      }
    } catch (error) {
      setError(error.message || "An error occurred while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white mx-auto max-w-4xl p-4">
      <h2 className="text-blue-600">Search GitHub Users</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub username"
          value={formInput.username}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={formInput.location}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Minimum repositories"
          value={formInput.minRepos}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full" />
            <h3 className="text-lg font-bold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
