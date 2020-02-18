import React from 'react';
import styled from 'styled-components';
import PrimaryTag from '../tags/primary-tag'
import doctor from "../../images/doctor.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  margin: 1rem;
  padding: 2rem;
  box-shadow: 0px 0px 32px rgba(58, 113, 116, 0.2);
  flex-wrap: wrap-reverse;
  max-width: 720px;
`
const Left = styled.div`
  flex: 2;
`
const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (min-width:1200px) {
  align-items: start;
}
`
const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  padding: 1.5rem;
  width: 100%;
`

const Avatar = styled.img`
  max-height: 12rem;
  max-width: 12rem;
`

const Header = styled.div`
  background-color: white;
`
const Main = styled.div`
  background-color: white;
`
const Footer = styled.div`
  display: flex;
`
const FooterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 4px;
  background: #FBE6B0;
  color: rgba(51, 132, 154, 0.95);
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid rgba(249, 209, 106, 1);
  outline: none;
  letter-spacing: 0.05em;
  width: 100%;
  margin: 0.5rem;

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  -webkit-backface-visibility: hidden;

  &:hover {
    color: #FDFDFD;
    background: rgba(249, 209, 106, 1);
    border: 2px solid #FBE6B0;
    transform: translateY(-3px);
    box-shadow: 0px 4px 16px rgba(79, 71, 51, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    }
  }
`

const Title = styled.h2`
  font-size: 3rem;
`
const SubTitle = styled.p`
  font-size: 1.5rem;
`
const Tags = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 1rem;
`
const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1rem 0rem;
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`

const Icon = styled.div`
  display: flex;
  color: #FD8686;
  margin-right: 1.5rem;
  align-items: center;
`
const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Body = styled.div`
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
`
const Content = styled.p`

`

const HorizontalPreviewCard = (props) => (
  <Wrapper>
    <Left>
      <Header>
        <Title>{props.name}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
        <Tags>
          <PrimaryTag>{props.tag1}</PrimaryTag>
          <PrimaryTag>{props.tag2}</PrimaryTag>
          <PrimaryTag>{props.tag3}</PrimaryTag>
        </Tags>
      </Header>
      <Main>
        <List>
          <ListItem>
            <Icon><FaMapMarkerAlt size={18}/></Icon>
            {props.location}
          </ListItem>
        </List>

        <Body>
          <Content>Option congue nihil imperdiet doming id quod mazim placerat facer possim assum typi non. Dolor in hendrerit...
          </Content>
        </Body>


      </Main>
      <Footer>
        <FooterLeft>
          <FooterButton>See Profile</FooterButton>
        </FooterLeft>
        <FooterRight>
          <FooterButton>Contact</FooterButton>
        </FooterRight>
      </Footer>
    </Left>

    <Right>
      <AvatarWrapper>
        <Avatar src={doctor} alt="doctor"/>
      </AvatarWrapper>
      <Icons>
        <Icon><FaStar size={24}/></Icon>
      </Icons>
    </Right>
  </Wrapper>

)

export default HorizontalPreviewCard;
