import React from 'react';
import SearchBar from './search-bar'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0rem;
  background-color: rgba(24, 153, 171, 0.9);
  justify-content: center;
  align-items: center;
`

const Search = () => (
  <Container>
    <SearchBar />
  </Container>
)

export default Search;
