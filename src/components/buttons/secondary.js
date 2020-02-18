import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.75rem;
  margin: 1rem 0;
  font-weight: 600;
  background-color: transparent;
  text-transform: uppercase;
  border-bottom: solid 3px var(--yellow-primary);
  padding: 1rem 0rem;
  &:hover {
    border-bottom: solid 3px var(--yellow-secondary);
  }

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  -webkit-backface-visibility: hidden;

`

const SecondaryButton = ({ children, ...otherProps}) => (
  <StyledButton {...otherProps}>
    {children}
  </StyledButton>
)

export default SecondaryButton;
