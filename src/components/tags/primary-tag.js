import React from 'react';
import styled from 'styled-components';

const Chip = styled.div`
  background-color: yellow;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  margin: 1rem; 
`

const PrimaryTag = ({ children, ...otherProps}) => (
  <Chip {...otherProps}>
    {children}
  </Chip>
)

export default PrimaryTag;
