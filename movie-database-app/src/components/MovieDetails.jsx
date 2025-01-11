import React from 'react'

const MovieDetails=({movie, onClose})=> {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <button className="mb-6 text-red-500 rounded-full float-right " onClick={onClose}><strong>X</strong></button>
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
            <h3 className="text-2xl text-black font-bold mt-4">{movie.Title}</h3>
            <p className='text-black'><strong>Genre:</strong>{movie.Genre}</p>
            <p className='text-black'><strong>Plot Summary:</strong>{movie.Plot}</p>
            <p className='text-black'><strong>Actors:</strong>{movie.Actors}</p>
            <p className='text-black'><strong>Ratings:</strong>{movie.imdbRating}</p>
        </div>
    </div>
  );
};

export default MovieDetails