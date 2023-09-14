import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import './Button.css';

const ButtonFavorite = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  // Vérifie si la recette est déjà dans les favoris
  const isFavorite = favorites.some(favRecipe => favRecipe.idMeal === recipe.idMeal);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(recipe.idMeal));
    } else {
      dispatch(addToFavorites(recipe));
    }
  };

  return (
    <button className='btn-favorite' onClick={handleToggleFavorite}>
      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  );
};

export default ButtonFavorite;
