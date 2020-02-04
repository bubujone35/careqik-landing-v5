import React from 'react';
import styled from 'styled-components';
import BasicCard from '../../cards/basic'
import H3 from '../../headers/h3'

const Content = styled.div`
  padding: 1rem 0rem;
`

const About = () => (
  <BasicCard>
    <H3 title="About"/>
    <Content>
      <p>Eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes in! Eorum claritatem Investigationes demonstraverunt, lectores legere me lius quod ii legunt. Aliquip ex ea commodo consequat duis autem vel eum iriure dolor in hendrerit in vulputate. Exerci tation ullamcorper suscipit lobortis nisl ut velit esse molestie consequat?
      </p>
    </Content>
  </BasicCard>
);

export default About
