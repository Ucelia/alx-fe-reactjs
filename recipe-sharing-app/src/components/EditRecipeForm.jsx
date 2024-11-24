import React from 'react';
import { useState } from 'react';
import  useRecipeStore from './recipeStore'

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(', '));

    const handleSubmit =(e) => {
        e.preventDefault();
        const updatedRecipe = { ...recipe,title,description, ingredients: ingredients.split(',').map((item) => item.trim()),
    };
    updateRecipe(recipe.id, updatedRecipe);
};

return(
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} 
        onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}  placeholder='Description'/>
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder='Ingredients' />
        <button type='submit'>Save Changes</button>
    </form>
);

};

export default EditRecipeForm