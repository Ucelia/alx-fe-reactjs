import React, { useState } from 'react'

const SearchBar=({onSearch})=> {
    const [query, setQuery]= useState("");

    const handleSubmit = ()=>{
        if (query.trim()) {
            onSearch(query);
        }
    };

  return (
    <div className="flex justify-center my-4">
        <input type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder='Search for a movie'
        />
        <button onClick={handleSubmit} className="bg-green-800 text-white p-2 ml-4 rounded-r-md">Search</button>
    </div>
  );
};

export default SearchBar