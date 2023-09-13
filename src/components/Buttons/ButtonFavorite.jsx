import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';
import './Button.css';

const ButtonFavorite = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = favorites.some(favRecipe => favRecipe.id === recipe.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(recipe.id));
    } else {
      dispatch(addToFavorites(recipe));
    }
  };

  return (
    <button className='btn-favorite' onClick={handleToggleFavorite}>
      {isFavorite ? 'Enlever des favoris' : 'Ajouter aux favoris'}
    </button>
  );
};

export default ButtonFavorite;
