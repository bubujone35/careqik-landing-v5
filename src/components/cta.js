import React from "react";
import { Link } from "gatsby";
import PrimaryButton from "../components/buttons/primary"

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 6rem 4.5rem;
  background-color: #FAFAFA;

  @media screen and (max-width:720px) {
  padding: 4rem 2rem;

}
`

const Wrapper = styled.div`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Title = styled.h2`
  font-size: 4.5rem;
  color: rgba(51, 132, 154, 0.95);
  letter-spacing: 1px;

  @media screen and (max-width:720px) {
  font-size: 2.5rem;
}
`

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1.5rem 4rem;
  color: rgba(51, 132, 154, 0.95);
`

const Cta = () => (
  <>
    <Container>
      <Wrapper>
          <Title>Ready to get started?</Title>
          <PrimaryButton>
            <StyledLink to="/contact">Book appointment</StyledLink>
          </PrimaryButton>
      </Wrapper>
    </Container>
  </>
   )

 export default Cta;
