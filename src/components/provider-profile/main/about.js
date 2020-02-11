import React from 'react';
import styled from 'styled-components';
import BasicCard from '../../cards/basic'
import H3 from '../../headers/h3'

const Content = styled.p`
  padding: 1rem 0rem;
`

const About = (props) => (
  <BasicCard>
    <H3 title="About"/>
    <Content>
      {props.content}
    </Content>
  </BasicCard>
);

export default About
