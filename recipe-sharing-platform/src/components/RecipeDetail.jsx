import React from 'react'
import { useEffect, useState } from 'react';
import recipeData from '../data.json';
import { useParams } from 'react-router-dom';

const RecipeDetail=()=> {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(()=>{
        const selectedRecipe= recipeData.find((recipe)=> recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
    },[id]);

    if (!recipe) {
        return <div>Loading...</div>;
      }

  return (
    <div className='container bg-white p-7 max-h-full max-w-full rounded-lg'>
        <div className="text-center bg-lime-800 p-4 shadow-md transform hover:scale-105 ease-in-out rounded-md max-w-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold text-lime-950 italic">{recipe.title}</h1>
        <p className="text-lime-50 mt-4">{recipe.summary}</p>
        <div className=''>
        <p className="text-lime-50 mt-4"><b>Ingredients: </b>{recipe.ingredients}</p>
        <p className="text-lime-50 text-sm italic font-thin mt-4">{recipe.instructions}</p>
        </div>
        
      </div>
    </div>
    
  )
}

export default RecipeDetail