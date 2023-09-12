import { config } from "../config";

const API_BASE_URL = config.baseUrl;

export const fetchCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/categories.php`);
  return response.json();
};

export const fetchRecipesByCategory = async (category) => {
  const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
  return response.json();
};

export const fetchRecipeById = async (recipeId) => {
  const response = await fetch(`${API_BASE_URL}/lookup.php?i=${recipeId}`);
  return response.json().then(data => data.meals[0]);
};


