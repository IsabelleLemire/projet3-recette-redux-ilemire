import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import store from './store/store';
import Home from './components/Home/Home';
import CategoryPage from './components/CategoryPage/CategoryPage';
import RecipePage from './components/RecipePage/RecipePage';
import FavoriteRecipes from './components/FavoriteRecipes/FavoriteRecipes';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} />
            <Route path="/favorites" element={<FavoriteRecipes />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
