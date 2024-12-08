import React from 'react'
import { useState, useEffect } from 'react'
import recipeData from '../data.json'
import { Link } from 'react-router-dom';

const HomePage =() =>{
  const [recipes, setRecipes] = useState([]);

  useEffect (() =>{
    setRecipes(recipeData);
  }, []);

  return(
    <div>
        <div className="container bg-white mx-auto p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl text-lime-950 mb-6">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md p-4">
            {recipes.map((recipe) => (
        <div
        key={recipe.id}
        className=" bg-lime-800 rounded-lg mx-auto shadow-md p-4 transform hover:scale-105 
        transition-transform ease-in-out"
        >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-full flex justify-self-center shrink-0"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
          <p className=" mb-4">{recipe.summary}</p>
          <Link to={`/recipe/${recipe.id}`}>
            <button className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700">
                View Details
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );

};

export default HomePage