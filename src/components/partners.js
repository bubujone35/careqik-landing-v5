import React from "react";
import { FaLaugh } from 'react-icons/fa';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
   display: none;
 }
`
const Section = styled.div`
  flex: 0 0 auto;
  padding: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA;
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
  </>
   )

 export default Partners;
