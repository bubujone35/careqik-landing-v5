import React from "react";
import telemed1 from "../images/telemed1.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  flex-wrap: wrap;
  background-color: lightgray;
  padding: 1rem;
  flex-wrap: wrap;

`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  justify-content: center;
  background-color: darkgray;

  @media screen and (max-width:560px) {
  align-items: center;

  }
`
const Right = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
justify-content: space-around;
background-color: cyan;

`
const Title = styled.div`
  font-size: 3rem;
`
const Subtitle = styled.div`
  font-size: 2rem;
`
const Image = styled.img`
  max-width: 20rem;
  min-width: 12rem;

`
const List = styled.ul`
  list-style-position: inside;
  font-size: 1.5rem;
`
const ListItem = styled.li`

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
      </Right>
    </Container>
  </>
   )

 export default Works;
