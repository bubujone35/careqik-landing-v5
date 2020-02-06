import React from "react";
import { FaLaugh } from 'react-icons/fa';
import sprc from "../images/sprc.png"
import cornerstone from "../images/cornerstone.png"
import i2r from "../images/I2R.png"
import medx from "../images/medx.png"

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
  padding: 1rem 4rem;
  color: rgba(0, 0, 0, 0.45);
  border-bottom: solid 1px lightgray;
`
const Section = styled.div`
  flex: 0 0 auto;
  padding: 0rem 4.5rem 4.5rem 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <PartnerLink href="https://scottsdaleprovidence.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <Image src={sprc} alt="scottsdale providence recovery" />
        </PartnerLink>
      </Section>

      <Section>
        <PartnerLink href="https://scottsdalecornerstone.com/" target="_blank" rel="noopener noreferrer" title="cornerstone healing center">
          <ImageCorner src={cornerstone} alt="cornerstone healing center" />
        </PartnerLink>
      </Section>

      <Section>
        <PartnerLink href="https://invitation2recovery.com" target="_blank" rel="noopener noreferrer" title="invitation 2 recovery">
          <ImageCorner src={i2r} alt="invitation to recovery" />
        </PartnerLink>
      </Section>

      <Section>
        <PartnerLink href="https://medxscottsdale.com/" target="_blank" rel="noopener noreferrer" title="med x">
          <ImageCorner src={medx} alt="medx" />
        </PartnerLink>
      </Section>

      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
      <Section>
        <IconStyle><FaLaugh size={40}/></IconStyle>
      </Section>
    </Container>
    </Wrapper>
  </>
   )

 export default Partners;
