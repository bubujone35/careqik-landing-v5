import React from 'react';
import styled from 'styled-components';
import BasicCard from '../../cards/basic';
import H3 from '../../headers/h3';

import { FaBookmark } from "react-icons/fa";


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
  color: #FBE6B0;
  margin-right: 1.5rem;
`
const List = styled.ul`

`
const ListItem = styled.li`

`

const Qualifications = () => (
  <BasicCard>
    <H3 title="Qualifications"/>
    <Content>
      <Wrapper>
        <Left>
          <Icon><FaBookmark size={22}/></Icon>
        </Left>
        <Right>
          <List>
            <ListItem>American Nurses Credentialing Center</ListItem>
            <ListItem>Psychiatric Mental Health Nurse Practitioner</ListItem>
          </List>
        </Right>
      </Wrapper>
    </Content>
  </BasicCard>
)

export default Qualifications;
