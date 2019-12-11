import React from "react";
import telemed1 from "../images/telemed1.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: gray;
  flex-wrap: wrap;
  padding: 1rem;
  min-height: 65vh;

`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  justify-content: center;

  @media screen and (max-width:560px) {
  align-items: center;

}
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-around;

  @media screen and (max-width:360px) {
  display: none;
`
const Title = styled.h1`
  font-size: 4.5rem;

  @media screen and (max-width:560px) {
  font-size: 2.6rem;
  line-height: 1.2;

}
`
const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;

  @media screen and (max-width:560px) {
  margin-top: 2rem;
  text-align: center;

}
`
const Titlewrap = styled.div`

`

const Button = styled.button`
  padding: 1rem 3rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 7rem;
  font-size: 1.5rem;
  border-radius: 6px;

  @media screen and (max-width:560px) {
  padding: 1rem 6rem;
`
const Image = styled.img`
  max-width: 20rem;
  min-width: 12rem;

`
const ImageSmall = styled.img`
  max-width: 20rem;
  min-width: 12rem;
  margin-top: 4rem; 

  @media screen and (min-width:360px) {
  display: none;
`

 const Banner = () => {
   return (
     <>
      <Container>
        <Left>
          <Titlewrap>
            <Title>We make happy, easy.</Title>
            <Subtitle>Mental healthcare for the modern world, <br/>powered by telemedicine.</Subtitle>
          </Titlewrap>
            <ImageSmall src={telemed1} alt="telepsychiatry" />
          <Button>Book appointment</Button>
        </Left>
        <Right>
          <Image src={telemed1} alt="telepsychiatry" />
        </Right>
      </Container>
     </>
   )
 }

 export default Banner
