import React from 'react';
import PrimaryTag from '../tags/primary-tag';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";



import styled from 'styled-components'


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: lightgray;
  border: solid 1px darkgray;
  border-radius: 8px;
  min-width: 360px;
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
const Contact = styled.div`
  background-color: gray;
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
  background-color: red;
`
const SocialItem = styled.a`
  margin: 1rem;
  display: inline-block;
  color: white;
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
    <Name>{props.name}</Name>
    <SubTitle>{props.subtitle}</SubTitle>
    <TagWrapper>
      <PrimaryTag>{props.tag1}</PrimaryTag>
      <PrimaryTag>{props.tag2}</PrimaryTag>
      <PrimaryTag>{props.tag3}</PrimaryTag>
    </TagWrapper>
    <Contact>
      <Location>{props.location}</Location>
      <Email>{props.email}</Email>
      <Phone>{props.phone}</Phone>
      <Website>{props.website}</Website>
      <Social>
        <SocialItem href="{`props.facebookURL`}" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebookF size={26}/>
        </SocialItem>

        <SocialItem href="{props.facebookURL}" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaLinkedinIn size={26}/>
        </SocialItem>

        <SocialItem href="{props.facebookURL}" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaInstagram size={26}/>
        </SocialItem>

        <SocialItem href="{props.facebookURL}" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaMediumM size={26}/>
        </SocialItem>
      </Social>
    </Contact>
  </Card>
)

export default ProfileCard;
