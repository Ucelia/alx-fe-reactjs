import React from 'react'

const MovieCard=({movie, onClick})=> {
  return (
    <div className="max-w-xs border rounded-md p-4 cursor-pointer hover:shadow-lg" onClick={() =>onClick(movie)}>
        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
        <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
        <p className="text-sm text-gray-600">{movie.Year}</p>
    </div>
  );
};
export default MovieCard