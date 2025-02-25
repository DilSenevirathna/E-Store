// src/components/Product.js
// src/components/Product.js
// src/components/Product.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product, addToCart }) => (
  <Card className="my-3 p-3 rounded">
    <Card.Img src={product.image} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>${product.price}</Card.Text>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </Card.Body>
  </Card>
);

export default Product;
