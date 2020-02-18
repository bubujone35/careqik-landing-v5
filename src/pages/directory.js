import React from 'react';
import Layout from '../components/layout';
import HorizontalPreviewCard from '../components/cards/horizontal-preview-card';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Directory = () => (
  <Layout>
  <Wrapper>
      <HorizontalPreviewCard
        name="Dr. Ryan Lee"
        subtitle="Psychiatric Nurse Practitioner"
        tag1="depression"
        tag2="anxiety"
        tag3="addiction"
        location="Chicago, IL"
      />
      <HorizontalPreviewCard
        name="Dr. Ryan Lee"
        subtitle="Psychiatric Nurse Practitioner"
        tag1="depression"
        tag2="anxiety"
        tag3="addiction"
        location="Chicago, IL"
      />
      <HorizontalPreviewCard
        name="Dr. Ryan Lee"
        subtitle="Psychiatric Nurse Practitioner"
        tag1="depression"
        tag2="anxiety"
        tag3="addiction"
        location="Chicago, IL"
      />
    </Wrapper>
  </Layout>
);

export default Directory
