import React from "react";
import { Input, Message } from "./inputs/input"


import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 6rem 2rem;
  background-color: #FAFAFA;
`
const Left = styled.div`
  background-color: gray
  flex-direction: column;
  padding: 1rem;
  margin-right: 2rem;
`
const Right = styled.div`
  background-color: lightgray;
  padding: 1rem;
  flex: 1;
`
const Title = styled.h2`
  font-size: 3rem;
`
const Subtitle = styled.p`
  font-size: 2rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
`
const Button = styled.button`
  padding: 1.5rem 6rem;
  margin-top: 1.5rem;
  border-radius: 4px;
`


const Subscribe = () => (
  <>
    <Container>
      <Left>
        <Title>Newsletter</Title>
        <Subtitle>Stay updated about all things Careqik</Subtitle>
        <Form>
          <Input
            for="email"
            name="email"
            type="text"
            placeholder="Email (required)"
          />
          <Button>Submit</Button>
        </Form>
      </Left>
      <Right>
        This is the right area
      </Right>
    </Container>
  </>
   )

 export default Subscribe;
