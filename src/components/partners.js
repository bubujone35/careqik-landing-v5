import React from "react";
import { FaLaugh } from 'react-icons/fa';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background-color: gray;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
   display: none;
 }
`
const Section = styled.div`
  flex: 0 0 auto;
  padding: 4.5rem;
  background-color: cyan;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h3`
  font-size: 1.5rem;
`
const IconStyle = styled.div`
  padding: 2rem;
`


const Partners = () => (
  <>
    <Container>
      <Section>
        <Title>Scottsdale Providence</Title>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <Title>Scottsdale Providence</Title>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <Title>Scottsdale Providence</Title>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <Title>Scottsdale Providence</Title>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <Title>Scottsdale Providence</Title>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <Title>Scottsdale Providence</Title>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>


    </Container>
  </>
   )

 export default Partners;
