import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  margin: 1rem;
  padding: 4rem;
  max-width: 640px;
  min-width: 320px;
  box-shadow: 0px 0px 32px rgba(58, 113, 116, 0.2);

  @media screen and (max-width:720px) {
  margin: 1rem;
}
`
const Title = styled.h3`
  font-size: 2.5rem;
`
const Content = styled.p`
  font-size: 1.5rem;
`

const ContentCard = (props) => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Content>{props.content}</Content>
  </Wrapper>
)

export default ContentCard;
