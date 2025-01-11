import React, { useState } from 'react'

const SearchBar=({onSearch, theme})=> {
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
        onChange={(e) => setQuery(e.target.value)} className={`p-2 rounded-l-md w-3/4 border focus:outline-none ${
            theme === "light"
              ? "bg-white text-black border-gray-400"
              : "bg-gray-800 text-white border-gray-600"
          }`}
        placeholder='Search for a movie'
        />
        <button onClick={handleSubmit} className="bg-green-800 text-white p-2 ml-4 rounded-r-md">Search</button>
    </div>
  );
};

export default SearchBar