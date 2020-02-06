import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom: solid 1px lightgray;
`
const Title = styled.h3`
  color: rgba(64, 90, 91, 0.9);
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
`

const H3 = (props) => (
  <Container>
    <Title>{props.title}</Title>
  </Container>
)

export default H3;
