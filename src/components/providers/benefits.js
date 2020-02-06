import React from 'react';
import profile from '../../images/profile.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;

  @media screen and (max-width:720px) {
  font-size: 3rem;
}
`
const SubTitle = styled.h3`
  font-size: 2.5rem;
  text-align: center;

  @media screen and (max-width:720px) {
  font-size: 1.5rem;
}
`
const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

const Benefits = () => (
  <Container>
    <Header>
      <Title>Grow your practice with Careqik</Title>
      <SubTitle>Create a beautiful profile and reach thousands of patients in need.</SubTitle>
    </Header>
    <ImageSection>
      <Image src={profile} alt="profile"/>
    </ImageSection>
  </Container>
);

export default Benefits;
