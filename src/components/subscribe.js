import React from "react";
import { Input, Message } from "./inputs/input"
import { Link } from "gatsby";
import PrimaryButton from "../components/buttons/primary"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 6rem 4.5rem;
  background-color: #FAFAFA;
  /* justify-content: space-between; */
  flex-wrap: wrap;

  @media screen and (max-width:720px) {
  padding: 1rem;
}
`
const Wrapper = styled.div`
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 8px;
  background: white;
  border: 1px solid #F6F6F6;
  box-shadow: 0px 0px 32px rgba(25, 154, 171, 0.15);

  @media screen and (max-width:560px) {
  padding: 1rem;
  border: none;
}
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: gray
  flex-direction: column;
  padding: 1rem;
  margin-right: 2rem;
  min-width: 360px;
  flex: 1;

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
        <Form name="newsletter" method="POST" data-netlify data-netlify-honeypot="bot-field">

          <Input
            for="email"
            name="email"
            type="text"
            placeholder="your.email@example.com"
          />
          <PrimaryButton type="submit"><StyledLink to="/thank-you">Subscribe</StyledLink></PrimaryButton>
        </Form>

        </Right>
      </Wrapper>
    </Container>
  </>
   )



 export default Subscribe;
