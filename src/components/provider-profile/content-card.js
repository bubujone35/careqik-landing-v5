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
const TitleWrapper = styled.div`
  border-bottom: solid 1px rgba(196, 196, 196, 0.4);;
  padding: 1rem 0rem;
`

const Title = styled.h3`
  font-size: 3rem;
`
const Content = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0rem;
`

const ContentCard = (props) => (
  <Wrapper>
    <TitleWrapper>
      <Title>{props.title}</Title>
    </TitleWrapper>
    <Content>{props.content}</Content>
  </Wrapper>
)

export default ContentCard;
