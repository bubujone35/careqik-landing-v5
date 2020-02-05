import React from 'react';
import PrimaryTag from '../tags/primary-tag';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import doctor from "../../images/doctor.png"

import styled from 'styled-components'


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  margin: 1rem;
  width: 100%:
  flex: 0;

  @media screen and (max-width:1200px) {
  /* align-items: center; */
  display: none;
}

`
const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Avatar = styled.img`
  max-height: 10rem;
  max-width: 10rem;
`

const Name = styled.h3`
  font-size: 3rem;
  color: rgba(64, 90, 91, 0.9);
  letter-spacing: 0.02em;
`
const SubTitle = styled.p`
  font-size: 1.5rem;
`
const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
`
const Icon = styled.div`
  display: flex;
  color: #FD8686;
  margin-right: 1.5rem;
  align-items: center;
`

const Location = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 1rem;
`
const Email = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 1rem;
`
const Phone = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 1rem;
`
const Website = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 1rem;
  text-decoration: none;
  color: black;
`
const Social = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`
const SocialItem = styled.a`
  margin: 1rem;
  display: inline-block;
  color: #3C8F94;;
  text-decoration: none;
  &:hover {
    color: #3A7174;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.3s;
  }
`


const ProfileCard = (props) => (
  <Card>
  <Meta>
    <Avatar src={doctor} alt="doctor"/>
    <Name>{props.name}</Name>
    <SubTitle>{props.subtitle}</SubTitle>
    <TagWrapper>
      <PrimaryTag>{props.tag1}</PrimaryTag>
      <PrimaryTag>{props.tag2}</PrimaryTag>
      <PrimaryTag>{props.tag3}</PrimaryTag>
    </TagWrapper>
  </Meta>
    <Contact>
      <Location>
        <Icon><FaMapMarkerAlt size={22}/></Icon>{props.location}
      </Location>
      <Email>
        <Icon><FaEnvelope size={22}/></Icon>
        {props.email}
      </Email>
      <Phone>
        <Icon><FaPhone size={22}/></Icon>
        {props.phone}
      </Phone>
      <Website href="https://www.careqik.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Icon><FaGlobeAmericas size={22}/></Icon>
        {props.website}
      </Website>
      </Contact>
      <Social>
        <SocialItem href="www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebookF size={26}/>
        </SocialItem>

        <SocialItem href="www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaLinkedinIn size={26}/>
        </SocialItem>

        <SocialItem href="www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaInstagram size={26}/>
        </SocialItem>

        <SocialItem href="www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaMediumM size={26}/>
        </SocialItem>
      </Social>
  </Card>
)

export default ProfileCard;
