import React from "react";
import { Link } from "gatsby"; 
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
  padding: 8rem;
  background-color: #1899AB;
  flex: 2;

  @media screen and (max-width:560px) {
  align-items: center;
  padding: 2rem;
  border-radius: 0px 0px 0px 0px;

  }
`
const Right = styled.div`
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
text-decoration: none;

-o-transition:.5s;
-ms-transition:.5s;
-moz-transition:.5s;
-webkit-transition:.5s;
transition:.3s;
-webkit-backface-visibility: hidden;

&:hover {
  color: #FDFDFD;
  background: rgba(24, 153, 171, 0.4);
  box-shadow: 0px 4px 16px rgba(79, 71, 51, 0.5);
  transform: translateY(-3px);

}

&:active {
  box-shadow: 0px 4px 16px rgba(79, 71, 51, 0.1);
  transform: translateY(-1px);
  }
}


@media screen and (max-width:560px) {
width: 100%;
}
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
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
      <Button><StyledLink to="/specialties">Learn more</StyledLink></Button>
      </Left>
      <Right>
        <Image src={monitor} alt="monitor" />
      </Right>
    </Container>
  </>
   )

 export default Specialties;
