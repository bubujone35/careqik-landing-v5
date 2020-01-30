import React from 'react';
import PrimaryTag from '../tags/primary-tag';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import doctor from "../../images/doctor.png"



import styled from 'styled-components'


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 4rem;
  margin: 1rem;
  width: 100%: 

`
const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Avatar = styled.img`
  max-height: 12rem;
  max-width: 12rem;
`

const Name = styled.h3`
  font-size: 3rem;
`
const SubTitle = styled.p`
  font-size: 1.5rem;
`
const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
`
const Info = styled.div`

`

const Contact = styled.div`
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`
const Location = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`
const Email = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`
const Phone = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`
const Website = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
`
const Social = styled.div`
  display: flex;
  justify-content: start;
  /* background-color: red; */
  margin-top: 4rem;
`
const SocialItem = styled.a`
  margin: 1rem;
  display: inline-block;
  color: black;
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
  <Info>
    <Contact>
      <Location>{props.location}</Location>
      <Email>{props.email}</Email>
      <Phone>{props.phone}</Phone>
      <Website>{props.website}</Website>
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
    </Contact>
    </Info>
  </Card>
)

export default ProfileCard;
