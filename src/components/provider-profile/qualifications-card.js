import React from 'react';
import BasicCard from '../cards/basic';

import styled from 'styled-components';

const TitleWrapper = styled.div`
  border-bottom: solid 1px rgba(196, 196, 196, 0.2);;
`

const Title = styled.h3`
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.9);
  padding-bottom: 1rem;

`
const TwoColumn = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 1rem 0rem;
  flex-wrap: wrap;
`

const Left = styled.div`
  flex: 1 auto;
`
const Right = styled.div`
  flex: 1 auto;
`

const SubTitle = styled.h4`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.75);
`
const Content = styled.p`
  font-size: 1.5rem;
`
const OneColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
`
const OneColumn = styled.div`
  padding-top: 2rem;
`


const QualificationsCard = (props) => (
  <BasicCard>
    <TitleWrapper>
      <Title>{props.title}</Title>
    </TitleWrapper>
    <TwoColumn>
      <Left>
        <SubTitle>Education</SubTitle>
        <Content>Fairfield University</Content>
      </Left>

      <Right>
        <SubTitle>Degree</SubTitle>
        <Content>Doctor of Nursing Practice</Content>
      </Right>
    </TwoColumn>
    <OneColumnContainer>
      <OneColumn>
        <SubTitle>Certifications</SubTitle>
        <Content>Board-certified Psychiatric Nurse Practitioner</Content>
      </OneColumn>
      <OneColumn>
        <SubTitle>Additional Training</SubTitle>
        <Content>Eye-movement desensitization reprocessing</Content>
      </OneColumn>
    </OneColumnContainer>
  </BasicCard>
)

export default QualificationsCard;
