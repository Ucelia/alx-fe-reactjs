import React from 'react'
import { useState } from 'react'

const AddRecipeForm = ()=> {
    const[title, setTitle] = useState("");
    const[ingredients, setIngredients] = useState("");
    const[steps, setSteps] = useState("");
    const[error, setError ] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

    if(!title||ingredients||steps){
        setError("All fields are required");
        return;
    }

    if(ingredients.split(" , ").length<2){
        setError("Atleast 2 ingredients are required");
        return;
    }

    setError("");

    const newRecipe = {
        title, ingredients: ingredients.split(" , "), steps,
    };

    console.log("New Recipe: ", newRecipe);
    alert("Recipe added successfully");

    setTitle("");
    setIngredients("");
    setSteps("");

    }

  return (
    <div className='container bg-white mx-auto p-9'>
        <div className='bg-white mx-auto shadow-2xl rounded-lg p-6  '>
        <h1 className='text-lime-700 m-5'>Add Recipe Form</h1>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
            <label className='text-label'>Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}
            className='inputs'
            />
            </div>
            <div>
            <label className='text-label'>Ingredients</label>
            <textarea value={ingredients} onChange={(e)=>{setIngredients(e.target.value)}} 
                className='inputs'
                />
            </div>
            <div>
            <label className='text-label'>steps</label>
            <textarea value={steps} onChange={(e)=>{setSteps(e.target.value)}} 
                className='inputs'
                />
            </div>
            <div>
            <button className='bg-lime-600 m-10 hover:bg-lime-700'>Add Recipe</button>
            </div>
            
        </form>
        </div>
        
    </div>
  );
};

export default AddRecipeForm