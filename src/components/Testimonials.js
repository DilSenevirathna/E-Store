// src/components/Testimonials.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Testimonials = () => (
  <Row>
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Text>"Great service and amazing products!"</Card.Text>
          <Card.Footer>- Customer 1</Card.Footer>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Text>"I love shopping here. Fast delivery!"</Card.Text>
          <Card.Footer>- Customer 2</Card.Footer>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Text>"Highly recommend this store!"</Card.Text>
          <Card.Footer>- Customer 3</Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Testimonials;
