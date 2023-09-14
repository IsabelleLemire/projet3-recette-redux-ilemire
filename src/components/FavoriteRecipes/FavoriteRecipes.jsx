import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../store/favoritesSlice';
import { selectFavorites } from '../../store/selectors';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import BackButton from '../Buttons/BackButton';
import Title from '../TitleText/Title';
import CustomLink from '../Links/CustomLink';


const FavoriteRecipes = () => {
  const favorites = useSelector(selectFavorites);
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
          <Title as="h1">Favorite recipes</Title>
            <ListGroup>
              {favorites.map(recipe => (
                <ListGroup.Item key={recipe.idMeal}>
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} className="imgThumbnail" />
                  <h2>{recipe.strMeal}</h2>
                  <button className='btn-favorite' onClick={() => handleRemoveFromFavorites(recipe.idMeal)}>Remove favorites</button>
                </ListGroup.Item>
              ))}
            </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <BackButton />
        </Col>
      </Row> 
    </Container>
  );
};

export default FavoriteRecipes;
