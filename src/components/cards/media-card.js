import React from 'react';
import doctor from '../../images/doctor.png';


import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  margin: 1rem;
`
const Left = styled.div`
  background-color: white;
  flex: 2;
  padding: 2rem;
`
const Title = styled.h4`
  font-size: 2.5rem;
`
const Content = styled.p`
  font-size: 1.5rem;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem;
`
const Image = styled.img`
  max-height: 10rem;
  max-width: 10rem;
`


const MediaCard = () => (
  <Container>
    <Left>
      <Title>Dr. Joe Novelli</Title>
      <Content>"Et quinta decima, eodem modo typi qui nunc nobis? Luptatum zzril delenit augue duis dolore te feugait nulla? Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Non habent claritatem insitam est usus."
      </Content>
    </Left>
    <Right>
      <Image src={doctor} alt="doctor"/>
    </Right>
  </Container>
);

export default MediaCard;
