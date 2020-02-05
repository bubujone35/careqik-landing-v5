import React from "react";
import { Input } from "./inputs/input"
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

const Subscribe = () => (
  <>
    <Container>
      <Wrapper>
        <Left>
          <Title>Newsletter</Title>
          <Subtitle>Stay updated about all things Careqik</Subtitle>
        </Left>
        <Right>

        <form
        name="newsletter-subscribe"
        method="post"
        action="/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" />
          </label>
        </p>

        <p>
          <button type="submit">Send</button>
        </p>
      </form>

        </Right>
      </Wrapper>
    </Container>
  </>
   )



 export default Subscribe;
