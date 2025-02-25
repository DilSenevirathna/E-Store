// src/components/Newsletter.js
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Newsletter = () => (
  <Row className="justify-content-center mt-4">
    <Col md={6}>
      <h3>Subscribe to Our Newsletter</h3>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </Col>
  </Row>
);

export default Newsletter;
