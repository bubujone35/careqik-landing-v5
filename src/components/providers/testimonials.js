import React from 'react';
import MediaCardList from '../cards/media-card-list'
import doctor from '../../images/doctor.png'

import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
`
const Top = styled.div`
  padding: 1rem;
`
const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  justify-content: center;
`
const Title = styled.h2`

  @media screen and (max-width:720px) {
  font-size: 2.5rem;
}
`
const SubTitle = styled.h3`

  @media screen and (max-width:720px) {
  font-size: 1.5rem;
}
`


const ProviderTestimonials = () => (
  <Container>
    <Top>
      <Title>Provider Testimonials</Title>
      <SubTitle>We've help hundreds of providers reach their practice goals. </SubTitle>
    </Top>
    <Bottom>
      <MediaCardList
        image={doctor}
        title="Dr. Jim Jones"
        subtitle="Psychiatric Nurse Practitioner"
        content="Facer possim assum typi non habent claritatem insitam est usus legentis in iis qui. Lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus qui."
        />
        <MediaCardList
          image={doctor}
          title="Dr. George Klooney"
          subtitle="Psychiatrist"
          content="Facer possim assum typi non habent claritatem insitam est usus legentis in iis qui. Lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus qui."
          />
          <MediaCardList
            image={doctor}
            title="Dr. Rapunzel Stillskin"
            subtitle="Licensed Professional Counselor"
            content="Facer possim assum typi non habent claritatem insitam est usus legentis in iis qui. Lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus qui."
            />
    </Bottom>

  </Container>
);

export default ProviderTestimonials;
