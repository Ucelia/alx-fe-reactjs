import React from 'react';
import { useNavigate, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({recipeId}) =>{
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const useNavigate = useNavigate();

    const handleDelete = ()=> {
        deleteRecipe(recipeId);
        Navigate('/');
    };

    return 
    <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;