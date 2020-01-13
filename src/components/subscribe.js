import React from "react";
import { Input, Message } from "./inputs/input"
import { Link } from "gatsby";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 6rem;
  background-color: #FAFAFA;
  /* justify-content: space-between; */
  flex-wrap: wrap;

  @media screen and (max-width:560px) {
  padding: 0rem;
}
`
const Wrapper = styled.div`
  padding: 4rem 2rem;
  border: 1px solid rgba(51, 132, 154, 0.95);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 8px;
  @media screen and (max-width:560px) {
  padding: 1rem;
  border: none;
}
`
const Left = styled.div`
  /* display: flex; */
  background-color: gray
  flex-direction: column;
  padding: 1rem;
  margin-right: 2rem;
  min-width: 360px;
  flex: 1;
}
`
const Right = styled.div`
  display: flex;
  padding: 1rem;
  flex: 1;
`
const Title = styled.h2`
  font-size: 3rem;
  color: rgba(51, 132, 154, 0.95);

`
const Subtitle = styled.p`
  color: rgba(51, 132, 154);
  font-size: 2rem;
  @media screen and (max-width:560px) {
  font-size: 1.5rem;
}
`
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

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
 padding: 1.5rem 0rem;
 border: 2px solid rgba(249, 209, 106, 1);
 border-radius: 4px;
 outline: none;
 letter-spacing: 0.05em;
 margin-left: 1rem;

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
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1.5rem 4rem;
  color: rgba(51, 132, 154, 0.95);
`


const Subscribe = () => (
  <>
    <Container>
      <Wrapper>
        <Left>
          <Title>Newsletter</Title>
          <Subtitle>Stay updated about all things Careqik</Subtitle>
        </Left>
        <Right>
        <Form>
          <Input
            for="email"
            name="email"
            type="text"
            placeholder="your.email@example.com"
          />
          <Button><StyledLink to="/thank-you">Subscribe</StyledLink></Button>
        </Form>
        </Right>
      </Wrapper>
    </Container>
  </>
   )

 export default Subscribe;
