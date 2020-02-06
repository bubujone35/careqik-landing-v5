import React from 'react';
import styled from 'styled-components';

const Chip = styled.div`
  background: var(--yellow-primary);
  border-radius: 100px;
  border: 0.75px solid var(--yellow-secondary);
  box-shadow: 0px 0px 16px rgba(223, 168, 27, 0.25);
  padding: 0.05rem 1.5rem;
  margin-right: 1rem;
  margin-top: 0.75rem;
  color: #DFA81B;
  font-size: 1.50rem;
`

const PrimaryTag = ({ children, ...otherProps}) => (
  <Chip {...otherProps}>
    {children}
  </Chip>
)

export default PrimaryTag;
