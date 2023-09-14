import { createSelector } from 'reselect';

const selectFavoritesState = state => state.favorites;

export const selectFavorites = createSelector(
  [selectFavoritesState],
  favorites => favorites
);