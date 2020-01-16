import React from "react";
import telemed1 from "../images/telemed1.png"
import PrimaryButton from "../components/buttons/primary"

import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 70vh;
  background-color: #1899AB;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  justify-content: center;
  color: white;

  @media screen and (max-width:720px) {
  align-items: center;
  margin-bottom: 2rem;

}
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-around;

  @media screen and (max-width:800px) {
  display: none;
`
const Title = styled.h1`
  font-size: 7rem;
  line-height: 1.2;

  @media screen and (max-width:720px) {
  font-size: 3.5rem;
  text-align: center;
  margin-top: 2rem;
}
`
const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1.5rem;

  @media screen and (max-width:720px) {
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;

}
`
const Titlewrap = styled.div`

`

const Image = styled.img`
  max-width: 30rem;
  min-width: 12rem;

`
const ImageSmall = styled.img`
  max-width: 20rem;
  min-width: 12rem;
  margin-top: 2rem;

  @media screen and (min-width:800px) {
  display: none;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1.5rem 4rem;
  color: rgba(51, 132, 154, 0.95);
`


 const Banner = () => {
   return (
     <>
      <Container>
          <Left>
            <Titlewrap>
              <Title>We make happy, <br/>easy.</Title>
              <Subtitle>Mental healthcare for the modern world, <br/>powered by telemedicine.</Subtitle>
            </Titlewrap>
              <ImageSmall src={telemed1} alt="telepsychiatry" />
            <PrimaryButton><StyledLink to="/contact">Start online intake</StyledLink></PrimaryButton>
          </Left>
          <Right>
            <Image src={telemed1} alt="telepsychiatry" />
          </Right>
      </Container>
     </>
   )
 }

 export default Banner
