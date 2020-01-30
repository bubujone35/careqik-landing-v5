import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 1rem;
  background-color: lightgray;
  min-width: 300px;
  padding: 4rem;
  margin: 1rem;
  border-radius: 8px;
  border: solid 1px black;

`
const Title = styled.h3`
  font-size: 2.5rem;
`
const Content = styled.p`
  font-size: 1.5rem;
`

const SideBar = () => (
  <Container>
    <Title>Office Hours</Title>
    <Content>This is the content</Content>
  </Container>
)

export default SideBar;
