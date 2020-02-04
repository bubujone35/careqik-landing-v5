import React from "react";
import { Link } from "gatsby";
import SecondaryButton from "./buttons/secondary"
import monitor from "../images/monitor.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: start; */
  flex-wrap: wrap-reverse;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 6rem;
  background-color: #1899AB;
  flex: 2;

  @media screen and (max-width:560px) {
  align-items: start;
  padding: 2rem;
  border-radius: 0px 0px 0px 0px;

  }
`
const Right = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 6rem;
justify-content: center;
flex: 1;

@media screen and (max-width:800px) {
flex: none;
}

@media screen and (max-width:560px) {
align-items: center;

}
`
const Title = styled.div`
  font-size: 3.5rem;
  color: white;

  @media screen and (max-width:560px) {
  font-size: 2rem;

}
`
const Subtitle = styled.div`
  font-size: 2rem;
  color: white;

  @media screen and (max-width:560px) {
  font-size: 1.5rem;

}
`
const Image = styled.img`
  max-width: 25rem;
  min-width: 15rem;
`
const ListContainer = styled.div`
  display: flex;
  align-content: stretch;
  width: 100%;
  margin-bottom: 2rem; 

`
const First = styled.div`
  margin-right: 2rem;
`
const Second = styled.div`
  margin-right: 2rem;
`

const List = styled.ul`
  list-style-position: inside;
  font-size: 2rem;
  margin-top: 2rem;
  color: white;
  @media screen and (max-width:560px) {
  font-size: 1.5rem;
}
`
const ListItem = styled.li`

`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #3A7174;
  }
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
      <SecondaryButton><StyledLink to="/specialties">Learn more</StyledLink></SecondaryButton>
      </Left>
      <Right>
        <Image src={monitor} alt="monitor" />
      </Right>
    </Container>
  </>
   )

 export default Specialties;
