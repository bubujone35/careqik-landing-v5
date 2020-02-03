import React from 'react';
import styled from 'styled-components';
import PrimaryTag from '../tags/primary-tag'
import doctor from "../../images/doctor.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  margin: 1rem;
  padding: 4rem;
  box-shadow: 0px 0px 32px rgba(58, 113, 116, 0.2);
  flex-wrap: wrap-reverse;

  @media screen and (min-width:1200px) {
  /* align-items: center; */
  display: none;
}
`
const Left = styled.div`
  flex: 2;
`
const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Avatar = styled.img`
  max-height: 10rem;
  max-width: 10rem;
`
const Header = styled.div`
  background-color: white;
`
const Main = styled.div`
  background-color: white;
`
const Footer = styled.div`
  background-color: gray;
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

const HorizontalProfileCard = () => (
  <Wrapper>
    <Left>
      <Header>
        <Title>Dr. Ryan Lee</Title>
        <SubTitle>Psychiatric Nurse Practitioner</SubTitle>
        <Tags>
          <PrimaryTag>Depression</PrimaryTag>
          <PrimaryTag>Anxiety</PrimaryTag>
          <PrimaryTag>Addiction</PrimaryTag>
        </Tags>
      </Header>
      <Main>
        <List>
          <ListItem>
            <Icon><FaMapMarkerAlt size={22}/></Icon>
            Chicago, IL
          </ListItem>
          <ListItem>
            <Icon><FaEnvelope size={22}/></Icon>
            ryan@careqik.com
          </ListItem>
          <ListItem>
            <Icon><FaPhone size={22}/></Icon>
            914-413-7544
          </ListItem>
          <ListItem>
            <Icon><FaGlobeAmericas size={22}/></Icon>
            www.careqik.com
          </ListItem>
        </List>
      </Main>
      <Footer>Footer</Footer>
    </Left>
    <Right>
      <Avatar src={doctor} alt="doctor"/>
    </Right>
  </Wrapper>

)

export default HorizontalProfileCard;
