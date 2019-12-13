import React from "react";
import telemed1 from "../images/telemed1.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  flex-wrap: wrap;
  background-color: lightgray;
  flex-wrap: wrap;

`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 4rem;
  justify-content: center;

  @media screen and (max-width:560px) {
  align-items: center;

  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: space-around;
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
  margin-top: 2rem;
  font-size: 1.5rem;
  border-radius: 4px;

  @media screen and (max-width:560px) {
  padding: 1rem 6rem;
`

const Works = () => (
  <>
    <Container>
      <Left><Image src={telemed1} alt="telepsychiatry" />
      </Left>
      <Right>
        <Title>Our treatment offerings</Title>
        <Subtitle>We deliver high quality mental health services online using video chat.</Subtitle>
        <List>
          <ListItem>Comprehensive psychiatric evaluations</ListItem>
          <ListItem>Medication management</ListItem>
          <ListItem>Individual therapy</ListItem>
          <ListItem>Family therapy</ListItem>
        </List>
        <Button>Learn more</Button>
      </Right>
    </Container>
  </>
   )

 export default Works;
