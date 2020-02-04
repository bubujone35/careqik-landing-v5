import React from 'react';
import styled from 'styled-components';

const Chip = styled.div`
  background: #FFEDBF;
  border-radius: 100px;
  border: 0.75px solid #DFA81B;
  box-shadow: 0px 0px 16px rgba(223, 168, 27, 0.25);
  padding: 0.05rem 1.5rem;
  margin-right: 1rem;
  margin-top: 0.5rem; 
  color: #DFA81B;
  font-size: 1.25rem;
`

const PrimaryTag = ({ children, ...otherProps}) => (
  <Chip {...otherProps}>
    {children}
  </Chip>
)

export default PrimaryTag;
