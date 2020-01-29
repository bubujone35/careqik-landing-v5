import React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components'
import doctor from '../images/doctor.png'

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  padding: 4rem;
`
const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #FFFFFF;
  box-shadow: 0px 0px 32px rgba(95, 158, 162, 0.2);
  border-radius: 12px;
  max-width: 360px;
`
const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: lightgray;
  padding: 4rem 1rem;
  margin: 1rem;
  width: 100%;

`

const Avatar = styled.img`
  max-width: 12rem;
  max-height: 12rem;
  padding: 1rem;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 3rem;
  line-height: 30px;
  letter-spacing: 0.03em;
  color: rgba(0, 0, 0, 0.95)
`
const SubTitle = styled.span`
  font-size: 1.75rem;
`
const Quote = styled.span`
  font-size: 1.5rem;
  font-style: italic;
`
const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: lightgray;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
`
const TagItem = styled.div`
  background-color: lightyellow;
  padding: 0.25rem 1.5rem;
  font-size: 1.5rem;
  margin: 1rem;
  border-radius: 100px;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: lightgray;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
`
const ContactItem = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
`
const Social = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding: 1rem;
  width: 100%;
`
const SubHeading = styled.p`
  font-size: 2.5rem;
`
const SocialItems = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 1rem 0rem;
`
const StyledIcon = styled.a`
  display: inline-block;
  color: gray;
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

const Patients = () => (
  <Layout>
    <Wrapper>
      <ProfileCard>
        <Meta>
          <Avatar alt="avatar" src={doctor}/>
          <Title>Dr. Ryan Lee</Title>
          <SubTitle>Psychiatric Nurse Practitioner</SubTitle>
          <Quote>"This is a quote about my practice beliefs."</Quote>
        </Meta>
        <Tags>
          <TagItem>#depression</TagItem>
          <TagItem>#anxiety</TagItem>
          <TagItem>#PTSD</TagItem>
          <TagItem>#addiction</TagItem>
          <TagItem>#medication</TagItem>
        </Tags>
        <Contact>
          <SubHeading>Contact</SubHeading>

          <ContactItem>Fairfield, CT</ContactItem>
          <ContactItem>914-444-1424</ContactItem>
          <ContactItem>ryan@psychcare.com</ContactItem>
          <ContactItem>www.ryanpsychcare.com</ContactItem>
        </Contact>
        <Social>
          <SubHeading>Social Media</SubHeading>
          <SocialItems>
            <StyledIcon><FaLinkedinIn size={26}/></StyledIcon>
            <StyledIcon><FaFacebookF size={26}/></StyledIcon>
            <StyledIcon><FaInstagram size={26}/></StyledIcon>
            <StyledIcon><FaMediumM size={26}/></StyledIcon>
          </SocialItems>
        </Social>
      </ProfileCard>
    </Wrapper>
  </Layout>
)

export default Patients;
