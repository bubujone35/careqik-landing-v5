import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../buttons/primary';
import MediaCard from '../cards/media-card';

const Container = styled.div`
  display: flex;
  background-color: lightgray;
  padding: 1rem;
  width: 100%;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: white;
  flex: 1;
  padding: 4rem;
`
const Heading = styled.div`

`

const Title = styled.h2`
  font-size: 4rem;
`
const SubTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const ProviderTestimonials = () => (
  <Container>
    <Left>
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </Left>
    <Right>
      <Heading>
        <Title>Join the fastest growing mental health directory</Title>
        <SubTitle>Here is a subtitle below, we need some catchy copy.<br/> Careqik is the best!</SubTitle>
      </Heading>
      <PrimaryButton>Sign up today</PrimaryButton>
    </Right>
  </Container>
);

export default ProviderTestimonials;
