import React from 'react';
import BasicCard from '../../cards/basic';
import H3 from '../../headers/h3';
import { FaCheck } from 'react-icons/fa';


import styled from 'styled-components';

const Accepted = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`
const Answer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 60px;
  margin-top: 1rem;
`
const Icon = styled.div`
  color: green;
`

const Insurance = (props) => (
  <BasicCard>
    <H3 title="Insurance"/>
      <Accepted>
        <p>Insurance Accepted?</p>
      </Accepted>
      <Answer>
        {props.answer}
        <Icon><FaCheck size={18}/></Icon>
      </Answer>
  </BasicCard>
);

export default Insurance;
