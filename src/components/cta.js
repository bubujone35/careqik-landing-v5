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
  padding: 8rem 2rem;
  background-color: #FAFAFA;
  /* margin-top: 4rem; */

`
const Left = styled.div`
  padding: 2rem
`
const Right = styled.div`
  padding: 2rem;
  @media screen and (max-width:560px) {
  padding: 1rem;
  }
`
const Title = styled.h3`
  font-size: 5rem;
  color: rgba(51, 132, 154, 0.95);

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
      <Left>
        <Title>Ready to get started?</Title>
      </Left>
      <Right>
        <PrimaryButton><StyledLink to="/contact">Book appointment</StyledLink></PrimaryButton>
      </Right>
    </Container>
  </>
   )

 export default Cta;
