import React from 'react';
import PrimaryButton from '../../components/buttons/primary'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--brand-secondary);
  padding: 6rem 4rem;
  border-bottom: 4px solid var(--yellow-secondary); 
`
const Title = styled.h2`
  text-align: center;
  color: white;
`
const SubTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
`


const ProviderCTA = () => (
  <Container>
    <Title>Let Careqik help you grow your practice.</Title>
    <SubTitle>For a limited a time, we are offering free membership for 3-months!</SubTitle>
    <PrimaryButton>Join for free today!</PrimaryButton>
  </Container>
);

export default ProviderCTA;
