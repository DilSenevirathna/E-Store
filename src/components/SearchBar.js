// src/components/SearchBar.js
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ query, setQuery }) => (
  <Form inline>
    <FormControl
      type="text"
      placeholder="Search Products"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="mr-sm-2"
    />
  </Form>
);

export default SearchBar;
