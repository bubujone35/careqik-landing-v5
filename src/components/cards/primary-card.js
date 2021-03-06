import React from "react";
import styled from "styled-components";
import SecondaryButton from "../buttons/secondary"
import plant from "../../images/plant.jpg"

const Card = styled.div`
  padding: 2rem;
  border: 1px solid rgba(79, 67, 1, 0.2);
  border-radius: 8px;
  margin: 0.5rem;
  box-shadow: 0px 0px 32px rgba(25, 154, 171, 0.15);
  flex: 1 1 350px;
  border: 1px solid #F6F6F6;
  /* background: rgba(255, 253, 240, 1); */
  background: white;
  max-width: 900px;
`

const Title = styled.h2`
  color: rgba(51, 132, 154, 0.95);
  line-height: 1.2;
`
const ImageWrapper = styled.div`
  flex: 1;
  padding: 1rem 0rem;
`

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`

const SubTitle = styled.h3`
  color: rgba(0, 0, 0, 0.54);
`
const Meta = styled.h4`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 0.1rem;
`

const Content = styled.p`
  font-size: 1.5rem;
`

const PrimaryCard = (props) => (
  <Card>
    <ImageWrapper>
      <Image src={plant} />
    </ImageWrapper>
    <Title>{props.title}</Title>
    <SubTitle>{props.subtitle}</SubTitle>
    <Meta>{props.meta}</Meta>
    <Content>{props.content}</Content>
    <SecondaryButton>{props.button}</SecondaryButton>
  </Card>
)

export default PrimaryCard;
