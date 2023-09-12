import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/Home/Home';
import CategoryPage from './components/CategoryPage/CategoryPage';
import RecipePage from './components/RecipePage/RecipePage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
