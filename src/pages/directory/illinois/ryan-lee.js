import React from 'react';
import Layout from '../../../components/layout';

import ProfileCard from '../../../components/provider-profile/profile-card'
import OfficeHours from '../../../components/provider-profile/sidebar/office-hours';
import Insurance from '../../../components/provider-profile/sidebar/insurance';
import HorizontalProfileCard from '../../../components/provider-profile/horizontal-profile-card';
import About from "../../../components/provider-profile/main/about";
import Education from "../../../components/provider-profile/main/education"
import Qualifications from "../../../components/provider-profile/main/qualifications";
import Contact from "../../../components/provider-profile/main/contact";

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
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width:1000px) {
  width: 100%;
  justify-content: center;
}
`

const RyanLee = () => (
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
          <HorizontalProfileCard
            name="Dr. Ryan Lee"
            subtitle="Psychiatric Nurse Practitioner"
            tag1="depression"
            tag2="anxiety"
            tag3="addiction"
            location="Chicago, IL"
            website="www.careqik.com"
          />
          <About
            content="Dr. Ryan Lee is a board-certified psychiatric nurse practitioner with over 8 years of clinical experience working in the mental health field. He takes a person-centered approach to patient care."
          />
          <Education
            school1="Fairfield University"
            degree1="Doctor of Nursing Practice"
            school2="Fairfield University"
            degree2="Bachelors of Science in Nursing"
          />
          <Qualifications
            qualification1="Board Certified Psychiatric Mental Health Nurse Practitioner"
            organization1="American Nursing Credentialing Center"
          />
          <Contact />
        </MainContent>
        <SideBar>
          <OfficeHours
            monHours="8:00am-5pm"
            tuesHours="8:00am-5pm"
            wedsHours="8:00am-5pm"
            thursHours="8:00am-5pm"
            friHours="8:00am-5pm"
            satHours="8:00am-5pm"
            sunHours="8:00am-5pm"
          />
          <Insurance
            answer="yes"
          />
        </SideBar>
    </Wrapper>
  </Layout>
)

export default RyanLee;
