// src/components/Footer.js
// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer bg-dark text-white py-3">
    <Container>
      <Row>
        <Col md={4}>
          <h5>About Us</h5>
          <p>Learn more about our company and our mission.</p>
        </Col>
        <Col md={4}>
          <h5>Contact Us</h5>
          <p>Email: contact@ecommerce.com</p>
          <p>Phone: +1 234 567 890</p>
        </Col>
        <Col md={4}>
          <h5>Follow Us</h5>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
