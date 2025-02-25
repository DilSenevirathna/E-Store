// src/pages/Home.js
// src/pages/Home.js
// src/pages/Home.js
// src/pages/Home.js
// src/pages/Home.js
import React from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import Product from '../components/Product';
import Cart from '../components/Cart';

const Home = ({ products, query, cartItems, addToCart, removeFromCart }) => {
  const categories = ['Men', 'Women', 'Home', 'Beauty'];
  const categorizedProducts = categories.reduce((acc, category) => {
    acc[category] = products.filter((product) => product.category === category);
    return acc;
  }, {});

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>Latest Products</h1>
      <Tab.Container defaultActiveKey="all">
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="all">All</Nav.Link>
          </Nav.Item>
          {categories.map((category) => (
            <Nav.Item key={category}>
              <Nav.Link eventKey={category}>{category}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="all">
            <Row>
              {filteredProducts.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} addToCart={addToCart} />
                </Col>
              ))}
            </Row>
          </Tab.Pane>
          {categories.map((category) => (
            <Tab.Pane eventKey={category} key={category}>
              <Row>
                {categorizedProducts[category].map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} addToCart={addToCart} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
      <h2>Shopping Cart</h2>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </>
  );
};

export default Home;
