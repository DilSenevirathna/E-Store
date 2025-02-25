// src/components/Cart.js
// src/components/Cart.js
import React from 'react';
import { ListGroup, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item._id}>
            <Row>
              <Col>{item.name}</Col>
              <Col>${item.price.toFixed(2)}</Col>
              <Col>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item._id)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card className="mt-3">
        <Card.Body>
          <Row>
            <Col>Total Cost</Col>
            <Col>${totalPrice.toFixed(2)}</Col>
          </Row>
          <Button as={Link} to="/checkout" variant="primary" className="mt-3" block>
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cart;
