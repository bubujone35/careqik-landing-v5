import React from 'react';
import Layout from '../components/layout'
import ProfileCard from '../components/provider-profile/profile-card'
import ContentCard from '../components/provider-profile/content-card'
import SideBar from '../components/provider-profile/sidebar'
import doctor from '../images/doctor.png'
import SocialIcons from '../components/icons/social/social-icons'
import PrimaryButton from '../components/buttons/primary'
import QualificationsCard from '../components/provider-profile/qualifications-card'
import HorizontalProfileCard from '../components/provider-profile/horizontal-profile-card'

import BasicCard from '../components/cards/basic'

import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem 2rem;
  min-height: 75vh;
  @media screen and (max-width:1000px) {
  flex-wrap: wrap;
  padding: 2rem 0rem;
}
`
const MainContent = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: space-around;
`
const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  margin: 1rem;
  padding: 4rem;
  max-width: 640px;
  min-width: 320px;
  box-shadow: 0px 0px 32px rgba(58, 113, 116, 0.2);

  @media screen and (min-width:720px) {
  padding: 1rem;

}
`
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Right = styled.div`
  display: flex;
  justify-content: center;
  flex: 1
`
const Title = styled.h3`
  font-size: 2.5rem;
`
const Content = styled.p`
  font-size: 1.5rem;
`


const Patients = () => (
  <Layout>
    <Wrapper>
        <ProfileCard
          name="Dr. Ryan Lee"
          subtitle="Psychiatric Nurse Practitioner"
          tag1="#depression"
          tag2="#anxiety"
          tag3="#addiction"
          location="Chicago, IL"
          email="ryan@careqik.com"
          phone="914-444-4444"
          website="www.careqik.com"
        />
        <MainContent>
          <HorizontalProfileCard />
          <ContentCard
            title="About"
            content="Delenit augue duis dolore te feugait nulla facilisi nam liber tempor cum soluta nobis eleifend. Enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis. Sequitur mutationem consuetudium lectorum mirum est notare quam littera gothica quam nunc. Consequat duis autem vel eum iriure dolor in."
          />
          <QualificationsCard
            title="Qualifications"
            subtitle="Education"
          />
            <ContentCard
              title="Specialties"
              content="Delenit augue duis dolore te feugait nulla facilisi nam liber tempor cum soluta nobis eleifend."/>
          <BasicCard>
            <Title>Specialties</Title>
            <Content>Delenit augue duis dolore te feugait nulla facilisi nam liber tempor cum soluta nobis eleifend.</Content>
          </BasicCard>
          <Contact>
            <Left>
              <Title>For a free consultation</Title>
            </Left>
            <Right>
              <PrimaryButton>Contact Dr. Lee</PrimaryButton>
            </Right>
          </Contact>
        </MainContent>
        <SideBar
          monHours="8:00-4:00pm"
          tuesHours="8:00-4:00pm"
          wedsHours="8:00-4:00pm"
          thursHours="8:00-4:00pm"
          friHours="8:00-4:00pm"
          satHours="8:00-4:00pm"
          sunHours="8:00-4:00pm"
        />

    </Wrapper>
  </Layout>
)

export default Patients;
