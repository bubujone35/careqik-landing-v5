import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 12rem 2rem;
  margin-top: -5%;
`
const Title = styled.h2`
  font-size: 3.5rem;
`
const SubTitle = styled.h3`
  font-size: 2.5rem;
  text-align: center; 
`
const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rebeccapurple;
  width: 100%;
  padding: 1rem;
  margin: 4rem 0rem;
`
const ListItem = styled.div`
  display: flex;
  background-color: darkgray;
  padding: 1rem;
`
const Left = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: white;
`
const Right = styled.div`
  flex: 4;
  padding: 1rem;
  background-color: lightgray;
`

const Benefits = () => (
  <Container>
    <Title>Grow your practice with Careqik</Title>
    <SubTitle>Create a beautiful profile and reach thousands of patients in need.</SubTitle>
    <ListSection>
      <ListItem>
        <Left>Left</Left>
        <Right>Right</Right>
      </ListItem>
      <ListItem>
        <Left>Left</Left>
        <Right>Right</Right>
      </ListItem>
      <ListItem>
        <Left>Left</Left>
        <Right>Right</Right>
      </ListItem>
    </ListSection>
  </Container>
);

export default Benefits;
