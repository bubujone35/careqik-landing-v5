import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
const Left = styled.div`
  padding: 2rem
`
const Right = styled.div`
  padding: 2rem;
`
const Title = styled.h3`
  font-size: 3rem;
`

const Button = styled.button`
  padding: 1rem 3rem;
  border-radius: 4px;
  font-size: 1.5rem;
`

const Cta = () => (
  <>
    <Container>
      <Left>
        <Title>Ready to get started?</Title>
      </Left>
      <Right>
        <Button>Book appointment</Button>
      </Right>
    </Container>
  </>
   )

 export default Cta;
