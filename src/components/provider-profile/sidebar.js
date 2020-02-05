import React from 'react';
import styled from 'styled-components';
import BasicCard from '../cards/basic'
import H3 from '../headers/h3';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-position: inside;
  font-size: 1.5rem;
  margin-top: 2rem;
  color: black;

`
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`

const SideBar = (props) => (
  <BasicCard>
    <H3 title="Office Hours"/>
      <List>
        <ListItem>Mon -  {props.monHours}</ListItem>
        <ListItem>Tues - {props.tuesHours}</ListItem>
        <ListItem>Weds - {props.wedsHours}</ListItem>
        <ListItem>Thurs - {props.thursHours}</ListItem>
        <ListItem>Fri - {props.friHours}</ListItem>
        <ListItem>Sat - {props.satHours}</ListItem>
        <ListItem>Sun - {props.sunHours}</ListItem>
      </List>
  </BasicCard>
)

export default SideBar;
