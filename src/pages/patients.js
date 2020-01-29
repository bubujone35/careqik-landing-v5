import React from 'react';
import Layout from '../components/layout'
import ProfileCard from '../components/provider-profile/profile-card'
import doctor from '../images/doctor.png'
import SocialIcons from '../components/icons/social/social-icons'

import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  padding: 4rem;
`
const Image = styled.img`
  max-height: 12rem;
  max-width: 12rem;
`

const Patients = () => (
  <Layout>
    <Wrapper>
      <ProfileCard
        name="Dr. Ryan Lee"
        subtitle="Psychiatric Nurse Practitioner"
        tag1="depression"
        tag2="anxiety"
        tag3="addiction"
        location="Chicago, IL"
        email="ryan@careqik.com"
        phone="914-444-4444"
        website="www.careqik.com"
      >
      </ProfileCard>
    </Wrapper>
  </Layout>
)

export default Patients;
