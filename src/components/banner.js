import React from "react";
import telemed1 from "../images/telemed1.png"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 65vh;
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
  font-size: 5rem;
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

const Button = styled.button`
  /* padding: 1.5rem 4rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 5rem;
  font-size: 1.8rem;
  color: white;
  border-radius: 2px;
  border: 1.5px solid white;
  background-color: #1899AB;
  letter-spacing: 0.2px;
 */
 background: #FBE6B0;
 color: rgba(51, 132, 154, 0.95);
 font-size: 1.7rem;
 font-weight: bold;
 padding: 1.5rem 4rem;
 border: 2px solid rgba(249, 209, 106, 1);
 border-radius: 4px;
 outline: none;
 letter-spacing: 0.05em;
 margin-top: 5rem;

 -o-transition:.5s;
 -ms-transition:.5s;
 -moz-transition:.5s;
 -webkit-transition:.5s;
 transition:.3s;
 -webkit-backface-visibility: hidden;
 /* -webkit-transform: translateZ(0) scale(1.0, 1.0); */
 /* for some reason the above causes the CTA button to overlay ontop of the subnav component */

 &:hover {
   color: #FDFDFD;
   background: rgba(249, 209, 106, 1);
   border: 2px solid #FBE6B0;
   transform: translateY(-3px);
   /* box-shadow: 0px 2px 10px rgba(188, 47, 174, 0.49); */
   box-shadow: 0px 4px 16px rgba(79, 71, 51, 0.2);
 }

 &:active {
   transform: translateY(-1px);
   }
 }

  @media screen and (max-width:560px) {
  padding: 1rem 6rem;
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
            <Button>Start online intake</Button>
          </Left>
          <Right>
            <Image src={telemed1} alt="telepsychiatry" />
          </Right>
      </Container>
     </>
   )
 }

 export default Banner
