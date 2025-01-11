import React from 'react'

const MovieDetails=({movie, onClose, theme})=> {
    const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const textColor = theme === 'light' ? 'text-black' : 'text-white opacity-80';

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className={`${bgColor} p-6 rounded-lg shadow-lg max-w-md`}>
            <button className="mb-6 text-red-500 rounded-full float-right " onClick={onClose}><strong>X</strong></button>
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
            <h3 className={`text-2xl font-bold mt-4 ${textColor}`}>{movie.Title}</h3>
            <p className={`${textColor}`}><strong>Genre:</strong>{movie.Genre}</p>
            <p className={`${textColor}`}><strong>Plot Summary:</strong>{movie.Plot}</p>
            <p className={`${textColor}`}><strong>Actors:</strong>{movie.Actors}</p>
            <p className={`${textColor}`}><strong>Rating:</strong>{movie.imdbRating}</p>
        </div>
    </div>
  );
};

export default MovieDetails