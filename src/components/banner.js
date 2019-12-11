import React from "react";
import telemed1 from "../images/telemed1.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
  flex-wrap: wrap;
  padding: 2rem;
  min-height: 75vh;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  justify-content: center;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-around;
`
const Title = styled.h1`
  font-size: 2.5rem;
`
const Subtitle = styled.h3`
  font-size: 1rem;
`
const Titlewrap = styled.div`

`

const Button = styled.button`
  padding: 1rem 3rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 2rem;
`
const Image = styled.img`
max-width: 20rem;
min-width: 12rem;
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
