import React from 'react';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <p>Ingredients: {recipe.ingredients.join(', ')}</p>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    );
  };

  export default RecipeDetails;