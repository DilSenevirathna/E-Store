// src/components/Header.js
// src/components/Header.js
// src/components/Header.js
// src/components/Header.js
// src/components/Header.js
// src/components/Header.js
// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({ query, setQuery }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
      <SearchBar query={query} setQuery={setQuery} />
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/home">Got To Our Store Products</Nav.Link>
        <Nav.Link as={Link} to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          <FontAwesomeIcon icon={faUser} /> Login
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
