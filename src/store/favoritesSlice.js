import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const existingRecipe = state.find(recipe => recipe.idMeal === action.payload.id);
      if (!existingRecipe) {
        state.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      return state.filter(recipe => recipe.idMeal !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
