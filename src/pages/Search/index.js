import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Searchbar } from './styled';

export default function Search() {
  return (
    <Container>
      <h1>Search</h1>
      <Searchbar>
        <input
          id="search"
          type="text"
          className="input"
          placeholder="Filter all recipes..."
        />
        <button id="clear" className="clear-results">
          OK
        </button>
      </Searchbar>
    </Container>
  );
}
