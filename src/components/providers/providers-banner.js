import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../buttons/primary';
import telemed1 from "../../images/telemed1.png";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 25vh;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  justify-content: center;
  background-color: darkgray;
  flex: 1;

  @media screen and (max-width:800px) {
  padding: 0rem;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media screen and (max-width:800px) {
  display: none;
`
const Heading = styled.div`
  padding: 7rem;
`
const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.2;
`
const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 2rem 0;
`

const Image = styled.img`
  max-width: 30rem;
  max-height: 30rem;

  @media screen and (max-width:800px) {
  display: none;
`


const ProvidersBanner = () => (
  <Container>
    <Left>
      <Heading>
        <Title>Help more patients</Title>
        <SubTitle>Join our provider directory and get discovered by patients online.</SubTitle>
        <PrimaryButton>Get started</PrimaryButton>
      </Heading>
    </Left>
    <Right>
      <Image src={telemed1} alt="telepsychiatry" />
    </Right>
  </Container>
);

export default ProvidersBanner;
