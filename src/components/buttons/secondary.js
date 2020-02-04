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
  color: rgba(51, 132, 154, 0.98);
  font-weight: 600;
  background-color: transparent;
  text-transform: uppercase;

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
