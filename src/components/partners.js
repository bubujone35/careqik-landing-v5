import React from "react";
import { FaLaugh } from 'react-icons/fa';

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FAFAFA;
`
const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
   display: none;
 }
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
const Heading = styled.h3`
  font-size: 2rem;
  padding: 1rem 4rem;
`
const Section = styled.div`
  flex: 0 0 auto;
  padding: 0rem 4.5rem 4.5rem 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h3`
  font-size: 1.5rem;
  color: rgba(51, 132, 154, 0.95);
`
const IconStyle = styled.div`
  padding: 2rem;
  color: rgba(249, 209, 106, 1);
`


const Partners = () => (
  <>
  <Wrapper>
    <Header>
      <Heading>Our trusted partners</Heading>
    </Header>
    <Container>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
        <Title>Scottsdale Providence</Title>
      </Section>
    </Container>
    </Wrapper>
  </>
   )

 export default Partners;
