import React from "react";
import telemed1 from "../images/telemed1.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  flex-wrap: wrap;

`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 8rem;
  justify-content: center;
  flex: 1;

  @media screen and (max-width:800px) {
  flex: none;
  }

  @media screen and (max-width:560px) {
  align-items: center;

  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 8rem;
  background-color: #1899AB;
  flex: 2;

  /* justify-content: start; */

  @media screen and (max-width:560px) {
  align-items: center;

  }
`
const Title = styled.div`
  font-size: 3.5rem;
  color: white;
`
const Subtitle = styled.div`
  font-size: 2rem;
  color: white;
`
const Image = styled.img`
  max-width: 25rem;
  min-width: 15rem;
`
const List = styled.ul`
  list-style-position: inside;
  font-size: 2rem;
  margin-top: 2rem;
  color: white;
`
const ListItem = styled.li`

`
const Button = styled.button`
  padding: 1.2rem 3.5rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 5rem;
  font-size: 1.5rem;
  color: white;
  border-radius: 4px;
  border: 1px solid white;
  background-color: #1899AB;
  ;

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
