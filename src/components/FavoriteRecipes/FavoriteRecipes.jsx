import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../store/favoritesSlice';
import BackButton from '../Buttons/BackButton';



const FavoriteRecipes = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = recipeId => {
    dispatch(removeFromFavorites(recipeId));
  };

  return (
    <div>
      <h1>Recettes en favoris</h1>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.strMeal}</h2>
          <button onClick={() => handleRemoveFromFavorites(recipe.id)}>
            Enlever des favoris
          </button>
        </div>
      ))}
      <BackButton />
    </div>
  );
};

export default FavoriteRecipes;
