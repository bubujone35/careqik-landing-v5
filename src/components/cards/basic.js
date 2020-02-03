import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  margin: 1rem;
  padding: 4rem;
  max-width: 640px;
  min-width: 320px;
  box-shadow: 0px 0px 32px rgba(58, 113, 116, 0.2);

  @media screen and (max-width:720px) {
  margin: 1rem;
}
`

const BasicCard = ({ children, ...otherProps}) => (
  <Container {...otherProps}>
    {children}
  </Container>
)

export default BasicCard;
