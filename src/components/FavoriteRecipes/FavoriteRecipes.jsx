import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../store/favoritesSlice';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import BackButton from '../Buttons/BackButton';
import Title from '../TitleText/Title';
import CustomLink from '../Links/CustomLink';


const FavoriteRecipes = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = recipeId => {
    dispatch(removeFromFavorites(recipeId));
  };

  return (

    <Container>
      <Row>
        <Col>
          <div className="text-center">
            <CustomLink to="/">Home</CustomLink>
          </div>
          <Title as="h1">Recettes en favoris</Title>
          <ListGroup>
            {favorites.map(recipe => (
            <div key={recipe.idMeal}>
              <h2>{recipe.strMeal}</h2>
              <button onClick={() => handleRemoveFromFavorites(recipe.idMeal)}>
                Enlever des favoris
              </button>
            </div>
            ))}
          </ListGroup>
          <BackButton />
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteRecipes;
