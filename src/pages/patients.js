import React from 'react';
import Layout from '../components/layout'
import ProfileCard from '../components/provider-profile/profile-card'
import ContentCard from '../components/provider-profile/content-card'
import SideBar from '../components/provider-profile/sidebar'
import doctor from '../images/doctor.png'
import SocialIcons from '../components/icons/social/social-icons'

import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem;
  min-height: 100vh;
  @media screen and (max-width:1000px) {
  flex-wrap: wrap;
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
          tag1="depression"
          tag2="anxiety"
          tag3="addiction"
          location="Chicago, IL"
          email="ryan@careqik.com"
          phone="914-444-4444"
          website="www.careqik.com"
        />
        <MainContent>
          <ContentCard
            title="About Dr. Ryan Lee"
            content="Delenit augue duis dolore te feugait nulla facilisi nam liber tempor cum soluta nobis eleifend. Enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis. Sequitur mutationem consuetudium lectorum mirum est notare quam littera gothica quam nunc. Consequat duis autem vel eum iriure dolor in."
          />
          <ContentCard
            title="Qualifications"
            content="Delenit augue duis dolore te feugait nulla facilisi nam liber tempor cum soluta nobis eleifend. Enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis. Sequitur mutationem consuetudium lectorum mirum est notare quam littera gothica quam nunc. Consequat duis autem vel eum iriure dolor in."
          />
        </MainContent>
        <SideBar />

    </Wrapper>
  </Layout>
)

export default Patients;
