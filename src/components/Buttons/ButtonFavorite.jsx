import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import './Button.css';

const ButtonFavorite = ({ recipe, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (recipe && recipe.idMeal) {
      if (isFavorite) {
        dispatch(removeFromFavorites(recipe.idMeal));
      } else {
        dispatch(addToFavorites(recipe));
      }
    }
  };
  
  return (
    <button className='btn-favorite' onClick={handleToggleFavorite}>
      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  );
};

export default ButtonFavorite;
