// src/pages/Welcome.js
// src/pages/Welcome.js
// src/pages/Welcome.js
// src/pages/Welcome.js
// src/pages/Welcome.js
import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedCarousel from '../components/Carousel';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Product from '../components/Product';

const latestProducts = [
  { _id: '1', name: 'T shirt', image: 'https://i.pinimg.com/236x/1e/cf/f5/1ecff53ab0ab271474441dcfd1e7542b.jpg', price: 59.99 },
  { _id: '2', name: 'Baggiee', image: 'https://i.pinimg.com/236x/8c/0c/4b/8c0c4b05ca1047505c9ff216a7fe5821.jpg', price: 39.99 },
  { _id: '3', name: 'Casual', image: 'https://i.pinimg.com/236x/51/41/44/514144a433b7c234ab3d087e79d69913.jpg', price: 29.99 },
  { _id: '4', name: 'Unisex', image: 'https://i.pinimg.com/236x/d7/46/27/d7462704e0380e15df45ef99974f96db.jpg', price: 19.99 },
  { _id: '5', name: 'Handloom', image: 'https://i.pinimg.com/736x/9a/8a/43/9a8a4399dd6fa5e6b0d794034e2a2fde.jpg', price: 59.99 },
  { _id: '6', name: 'T shirt', image: 'https://i.pinimg.com/236x/91/45/32/9145325a57ea02ce25b220351c92c7ea.jpg', price: 39.99 },
  { _id: '7', name: 'T shirt', image: 'https://i.pinimg.com/736x/ca/c8/3d/cac83d47779617f879e7cbf11eacc4cd.jpg', price: 29.99 },
  { _id: '8', name: 'T shirt', image: 'https://i.pinimg.com/236x/c3/0c/60/c30c60ba9ef22f2e684366b55a71dbb2.jpg', price: 19.99 },
];

const Welcome = ({ addToCart }) => (
  <Container className="text-center mt-5">
    <h1>Welcome to Our E-Commerce Site!</h1>
    <p>Discover amazing products and great deals.</p>
    <Button as={Link} to="/home" variant="primary" className="mb-4">
      Start Shopping
    </Button>
    
    <FeaturedCarousel />

    <Row className="mb-4">
      <Col>
      <br></br>
      <br></br>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/736x/50/8a/08/508a082f482a4e3400b75c7b1bbd4d5a.jpg" />
          <Card.Body>
            <Card.Title>Featured Product</Card.Title>
            <Card.Text>Check out our featured product of the week!</Card.Text>
            <Button as={Link} to="/home" variant="primary">Shop Now</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/736x/14/8a/8f/148a8f85a2ae488ed382060e1391038c.jpg" />
          <Card.Body>
            <Card.Title>Category 1</Card.Title>
            <Card.Text>Explore extensive collection in Category </Card.Text>
            <Button as={Link} to="/home" variant="primary">Browse Category</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/736x/a8/db/d5/a8dbd5c5af6e15b39b61d88f3eb5b00d.jpg" />
          <Card.Body>
            <Card.Title>Category 2</Card.Title>
            <Card.Text>Find amazing deals in Category 2.</Card.Text>
            <Button as={Link} to="/home" variant="primary">Browse Category</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/736x/9b/2d/1e/9b2d1e6a6e7486c284617cb6c199ea00.jpg" />
          <Card.Body>
            <Card.Title>Category 3</Card.Title>
            <Card.Text>Discover the best products in Category 3.</Card.Text>
            <Button as={Link} to="/home" variant="primary">Browse Category</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <h2 className="mt-5">Latest Products</h2>
    <Row>
      {latestProducts.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
          <Product product={product} addToCart={addToCart} />
        </Col>
      ))}
    </Row>

    <Testimonials />
    
    <Newsletter />
  </Container>
);

export default Welcome;
