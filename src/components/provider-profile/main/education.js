import React from 'react';
import styled from 'styled-components';
import BasicCard from '../../cards/basic';
import H3 from '../../headers/h3';

import { FaGraduationCap } from "react-icons/fa";


const Content = styled.div`
  display: flex;
  padding: 1rem 0rem;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  display: flex;
  flex: 1 auto;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Right = styled.div`

`
const Icon = styled.div`
  display: flex;
  color: #FD8686;
  margin-right: 1.5rem;
`
const List = styled.ul`
  list-style-type: none;

`
const ListItem = styled.li`

`

const Education = () => (
  <BasicCard>
    <H3 title="Education"/>
    <Content>
      <Wrapper>
        <Left>
          <Icon><FaGraduationCap size={22}/></Icon>
        </Left>
        <Right>
          <List>
            <ListItem>Fairfield University</ListItem>
            <ListItem>Doctor of Nursing Practice</ListItem>
          </List>
        </Right>
      </Wrapper>
      <Wrapper>
        <Left>
          <Icon><FaGraduationCap size={22}/></Icon>
        </Left>
        <Right>
          <List>
            <ListItem>Fairfield University</ListItem>
            <ListItem>Bachelor's of Science in Nursing</ListItem>
          </List>
        </Right>
      </Wrapper>
    </Content>
  </BasicCard>
)

export default Education;
