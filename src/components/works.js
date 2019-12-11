import React from "react";
import { FaLaugh } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: gray;
  flex-wrap: wrap;
  background-color: lightgray;
  padding: 1rem;

  @media screen and (max-width:860px) {
  flex-direction: column;
}
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orangered;
  padding: 2.5rem;
`
const Title = styled.h3`
  font-size: 1.5rem;
`
const Content = styled.p`
  font-size: 1.5rem;
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
        <Title>First Section</Title>
        <Content>This is the content below the title.</Content>
      </Section>

      <Section>
        <IconStyle2><FaClipboard size={40}/></IconStyle2>
        <Title>Second Section</Title>
        <Content>This is the content below the title.</Content>
      </Section>
      <Section>
        <IconStyle3><FaTrophy size={40}/></IconStyle3>
        <Title>Third Section</Title>
        <Content>This is the content below the title.</Content>
      </Section>
    </Container>
  </>
   )

 export default Works;
