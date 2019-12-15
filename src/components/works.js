import React from "react";
import { FaLaugh } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FAFAFA;
  flex-wrap: wrap;
  padding: 1rem;

  /* @media screen and (max-width:1000px) {
  flex-direction: column;
} */
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
  width: 300px;
`
const Title = styled.h3`
  font-size: 2rem;
  color: #074B5E;
`
const Content = styled.p`
  font-size: 1.5rem;
  color: #074B5E;
`

const IconStyle1 = styled.div`
  color: #C065E0;
`

const IconStyle2 = styled.div`
  color: #3FA6F0;
`

const IconStyle3 = styled.div`
  color: #F9D16A;
`

const Works = () => (
  <>
    <Container>
      <Section>
        <IconStyle1><FaLaugh size={40}/></IconStyle1>
        <Title>Online intake</Title>
        <Content>Complete our comprehensive online assessment. </Content>
      </Section>

      <Section>
        <IconStyle2><FaClipboard size={40}/></IconStyle2>
        <Title>Get matched</Title>
        <Content>We match you with providers based upon your individual needs. </Content>
      </Section>
      <Section>
        <IconStyle3><FaTrophy size={40}/></IconStyle3>
        <Title>Schedule appointment</Title>
        <Content>Our flexible scheduling makes accessing care easy.</Content>
      </Section>
    </Container>
  </>
   )

 export default Works;
