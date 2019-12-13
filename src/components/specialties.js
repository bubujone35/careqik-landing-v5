import React from "react";
import telemed1 from "../images/telemed1.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: start; */
  flex-wrap: wrap-reverse;
  background-color: lightgray;

`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 4rem;
  /* justify-content: start; */

  @media screen and (max-width:560px) {
  align-items: center;

  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  align-items: start;
`
const Title = styled.div`
  font-size: 3.5rem;
`
const Subtitle = styled.div`
  font-size: 2rem;
`
const Image = styled.img`
  max-width: 25rem;
  min-width: 15rem;
`
const ListContainer = styled.div`
  display: flex;
  align-content: stretch;
  width: 100%;

`
const First = styled.div`
  margin-right: 2rem;
`
const Second = styled.div`
  margin-right: 2rem;
`

const List = styled.ul`
  list-style-position: inside;
  font-size: 1.5rem;
  margin-top: 2rem;
`
const ListItem = styled.li`

`
const Button = styled.button`
  padding: 1rem 3rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  border-radius: 4px;

  @media screen and (max-width:560px) {
  padding: 1rem 6rem;
`

const Specialties = () => (
  <>
    <Container>
      <Left>
      <Title>Treatment Specialties</Title>
      <Subtitle>Our providers are industry experts who provide high-quality patient care.</Subtitle>
      <ListContainer>
        <First>
          <List>
            <ListItem>Depression</ListItem>
            <ListItem>Anxiety</ListItem>
            <ListItem>Mood Disorders</ListItem>
            <ListItem>PTSD</ListItem>
          </List>
        </First>
        <Second>
          <List>
            <ListItem>Depression</ListItem>
            <ListItem>Anxiety</ListItem>
            <ListItem>Mood Disorders</ListItem>
            <ListItem>PTSD</ListItem>
          </List>
        </Second>
      </ListContainer>
      <Button>Learn more</Button>
      </Left>
      <Right>
        <Image src={telemed1} alt="telepsychiatry" />
      </Right>
    </Container>
  </>
   )

 export default Specialties;
