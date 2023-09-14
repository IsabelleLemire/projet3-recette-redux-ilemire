import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchRecipesByCategory } from '../../services/api';

import Title from '../TitleText/Title';
import CustomLink from '../Links/CustomLink';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const { data: recipes, isLoading, isError } = useQuery(['recipes', category], () => fetchRecipesByCategory(category));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center">
            <CustomLink to="/">Home</CustomLink> / <Link to="/favorites">View favorites</Link>
          </div>
          <Title as="h1">{`Recipes in ${category}`}</Title>
          <ListGroup>
            {recipes.meals.map(recipe => (
              <ListGroup.Item key={recipe.idMeal}>
                <Row>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="imgThumbnail" />
                </Row>  
                <Row>
                    <Link to={`/recipe/${recipe.idMeal}`}>
                      {recipe.strMeal}
                    </Link>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;
