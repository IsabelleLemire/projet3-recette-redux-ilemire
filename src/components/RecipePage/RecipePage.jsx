import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchRecipeById } from '../../services/api';
import { useDispatch } from 'react-redux';


import CustomButton from '../Buttons/CustomButton';
import ButtonFavorite from '../Buttons/ButtonFavorite';
import BackButton from '../Buttons/BackButton'
import CustomLink from '../Links/CustomLink';
import Title from '../TitleText/Title';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipePage = () => {
  const { recipeId } = useParams();
  const { data: recipe, isLoading, isError } = useQuery(['recipe', recipeId], () => fetchRecipeById(recipeId));
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const [ingredientsVisible, setIngredientsVisible] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(false);

  useEffect(() => {
    if (recipe) {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setIsFavorite(storedFavorites.some(favRecipe => favRecipe.id === recipe.idMeal));
    }
  }, [recipe]);

  const handleToggleFavorite = () => {
    if (recipe && recipe.idMeal) {
      if (isFavorite) {
        dispatch(removeFromFavorites(recipe.idMeal));
      } else {
        dispatch(addToFavorites(recipe));
      }
      setIsFavorite(!isFavorite);
    } else {
      console.log("Recipe or recipe.idMeal is undefined.");
    }
  };


  const toggleIngredients = () => {
    setIngredientsVisible(!ingredientsVisible);
  };

  const toggleInstructions = () => {
    setInstructionsVisible(!instructionsVisible);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`],
      });
    }
  }

  return (
    <Container>
      <Row className='spaceMargin'>
        <Col className="text-center">
            <CustomLink to="/">Home</CustomLink> / <Link to="/favorites">View favorites</Link>
            <Title as="h1">{recipe.strMeal}</Title>
            <Row>
              <Col>
                <Title as="h2">Category: {recipe.strCategory}</Title>
                <ButtonFavorite recipe={recipe} isFavorite={isFavorite} />
              </Col>
            </Row>
        </Col>
      </Row>

      <Row className='spaceMargin'>
        <Col>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </Col>  
        <Col>
          <CustomButton onClick={toggleIngredients}>Ingredients</CustomButton>
          <CustomButton onClick={toggleInstructions}>Instructions</CustomButton>
            {ingredientsVisible && (
              <div>
                <Title as="h3">Ingredients</Title>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.measure} {ingredient.ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {instructionsVisible && (
              <div>
                <Title as="h3">Instructions</Title>
                <p>{recipe.strInstructions}</p>
              </div>
            )}
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <BackButton />
        </Col>
      </Row>  
    </Container>
  );
}

export default RecipePage;
