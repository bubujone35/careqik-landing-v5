import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  border-radius: 8px;
  border: 1px solid black;
  margin: 1rem;
  padding: 4rem;
  max-width: 640px;
  min-width: 320px;
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
