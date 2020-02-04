import React from "react";
import { Link } from "gatsby";
import SecondaryButton from "./buttons/secondary"
import doctor from "../images/doctor.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: start; */
  flex-wrap: wrap;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

// display: flex;
// flex-direction: column;
// align-items: start;
// padding: 6rem;
// background-color: #1899AB;
// flex: 2;
//
// @media screen and (max-width:560px) {
// align-items: center;
// padding: 2rem;
// border-radius: 0px 0px 0px 0px;
//
// }

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 6rem;
  background-color: #1899AB;
  flex: 2;
  min-width: 360px;

  @media screen and (max-width:560px) {
  align-items: start;
  padding: 2rem;
  border-radius: 0px 0px 0px 0px;

  }
`
const Title = styled.div`
  font-size: 3.5rem;
  color: white;

  @media screen and (max-width:560px) {
  font-size: 2.5rem;
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
const List = styled.ul`
  list-style-position: inside;
  font-size: 2rem;
  margin: 2rem 0rem;
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

const Works = () => (
  <>
    <Container>
      <Left><Image src={doctor} alt="doctor" />
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
        <SecondaryButton><StyledLink to="/treatment">Learn more</StyledLink></SecondaryButton>
      </Right>
    </Container>
  </>
   )

 export default Works;
