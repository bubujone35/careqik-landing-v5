import React from 'react';
import Layout from '../components/layout'

import ProfileCard from '../components/provider-profile/profile-card'
import SideBar from '../components/provider-profile/sidebar'
import HorizontalProfileCard from '../components/provider-profile/horizontal-profile-card';
import About from "../components/provider-profile/main/about";
import Education from "../components/provider-profile/main/education"
import Qualifications from "../components/provider-profile/main/qualifications";
import Contact from "../components/provider-profile/main/contact";



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
          <About />
          <Education />
          <Qualifications />
          <Contact />
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
