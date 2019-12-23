import React from "react";
import { Input, Message } from "./inputs/input"

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
  border: 1px solid gray;
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
  background-color: lightgray;
  padding: 1rem;
  flex: 1;
`
const Title = styled.h2`
  font-size: 3rem;
`
const Subtitle = styled.p`
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
  padding: 1.5rem 6rem;
  border-radius: 4px;
  margin: 1rem;
  cursor: pointer;
  text-decoration: none;
  width: 100%:

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
          <Button>Subscribe</Button>
        </Form>
        </Right>
      </Wrapper>
    </Container>
  </>
   )

 export default Subscribe;
