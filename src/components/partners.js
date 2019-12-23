import React from "react";
import { FaLaugh } from 'react-icons/fa';
import sprc from "../images/sprc.png"
import cornerstone from "../images/cornerstone.png"



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
  font-size: 1.6rem;
  padding: 1rem 4rem;
  color: rgba(0, 0, 0, 0.45);
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
  margin-top: 1rem;
`
const IconStyle = styled.div`
  padding: 2rem;
  color: rgba(249, 209, 106, 1);
`
const PartnerLink = styled.a`
  text-decoration: none;
  color: rgba(51, 132, 154, 0.95);
`
const Image = styled.img`
max-width: 8rem;
min-width: 5rem;
`
const ImageCorner = styled.img`
max-width: 18rem;
min-width: 5rem;
`

const Partners = () => (
  <>
  <Wrapper>
    <Header>
      <Heading>Our trusted partners</Heading>
    </Header>
    <Container>
      <Section>
        <Image src={sprc} alt="scottsdale providence recovery" />
        <Title><PartnerLink href="https://scottsdaleprovidence.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn">Scottsdale Providence</PartnerLink></Title>
      </Section>
      <Section>
        <ImageCorner src={cornerstone} alt="cornerstone healing center" />
        <Title>Cornerstone Healing Center</Title>
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
