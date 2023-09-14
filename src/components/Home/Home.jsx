import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCategories } from '../../services/api';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css';

import Title from '../TitleText/Title';


const Home = () => {
  const { data: categories, isLoading, isError } = useQuery('categories', fetchCategories);

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
          <Title as="h1">Book of best recipe</Title>
          <Title as="h2">Recipe Categories</Title>
          <ListGroup>
            {categories.categories.map(category => (
              <ListGroup.Item key={category.strCategory}>
                <Link to={`/category/${category.strCategory}`}>
                  {category.strCategory}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="text-center">
        <Link to="/favorites">View favorites</Link>
      </Row>
    </Container>
  );
}

export default Home;
