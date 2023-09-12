import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchRecipeById } from '../../services/api';

import CustomButton from '../Buttons/CustomButton';
import CustomLink from '../Links/CustomLink';
import Title from '../TitleText/Title';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipePage = () => {
  const { recipeId } = useParams();
  const { data: recipe, isLoading, isError } = useQuery(['recipe', recipeId], () => fetchRecipeById(recipeId));

  const [ingredientsVisible, setIngredientsVisible] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(false);

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
      <Row>
        <Col>
          <div className="text-center">
            <CustomLink to="/">Retour à la page d'accueil</CustomLink>
            <Title as="h1">{recipe.strMeal}</Title>
            <Title as="h2">Category: {recipe.strCategory}</Title>
          </div>
        </Col>
      </Row>  

      <Row>
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
    </Container>
  );
}

export default RecipePage;
