import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: white;
  margin: 1rem;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  min-width: 340px;
  max-width: 420px;
`
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
`
const Right = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 4;
  padding: 1rem;
`
const Image = styled.img`
  max-width: 7.5rem;


`
const Title = styled.h4`
  font-size: 2.5rem;

  @media screen and (max-width:720px) {
  font-size: 2rem;
}
`
const SubTitle = styled.span`
  font-size: 1.75rem;

  @media screen and (max-width:720px) {
  font-size: 1.5rem;
}
`

const Content = styled.p`
  font-size: 1.15rem;
  color: black;
`

const MediaCardList = (props) => (
  <Container>
    <Left>
      <Image src={props.image} />
    </Left>
    <Right>
      <Title>{props.title}</Title>
      <SubTitle>{props.subtitle}</SubTitle>
      <Content>"{props.content}"</Content>
    </Right>
  </Container>
);

export default MediaCardList;
