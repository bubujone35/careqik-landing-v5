import React from "react";
import { FaUserPlus } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import { FaCalendarDay } from 'react-icons/fa';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FAFAFA;
  flex-wrap: wrap;
  padding: 4rem;

  @media screen and (max-width:1000px) {
  flex-direction: column;
  padding: 1rem;
}
`
const Header = styled.div`
  background-color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  background: white;
`
const Heading = styled.h2`
  padding: 1rem 4rem;
  color: rgba(51, 132, 154, 0.95);
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6rem 4rem;
  width: 340px;
  background: white;
  margin: 1.5rem;

  border: 1px solid #F6F6F6;
  border-radius: 8px;
  box-shadow: 0px 0px 32px rgba(25, 154, 171, 0.15);

  @media screen and (max-width:1000px) {
  width: 95%;
  margin: 1rem;
}
`
const Title = styled.h3`
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
    <Header>
      <Heading>How it works</Heading>
    </Header>
    <Container>
      <Section>
        <IconStyle1><FaClipboard size={40}/></IconStyle1>
        <Title>Online intake</Title>
        <Content>Complete our comprehensive online assessment. </Content>
      </Section>

      <Section>
        <IconStyle2><FaUserPlus size={40}/></IconStyle2>
        <Title>Get matched</Title>
        <Content>We match you with providers based upon your individual needs. </Content>
      </Section>
      <Section>
        <IconStyle3><FaCalendarDay size={40}/></IconStyle3>
        <Title>Schedule appointment</Title>
        <Content>Our flexible scheduling makes accessing care easy.</Content>
      </Section>
    </Container>
  </>
   )


 export default Works;
