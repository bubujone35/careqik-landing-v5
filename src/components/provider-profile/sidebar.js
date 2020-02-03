import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1;
  padding: 1rem;
  background-color: white;
  min-width: 240px;
  padding: 4rem;
  margin: 1rem;
  border-radius: 8px;

`
const Title = styled.h3`
  font-size: 2.5rem;
`
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`
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
  <Container>
    <Title>Office Hours</Title>
      <List>
        <ListItem>Mon -  {props.monHours}</ListItem>
        <ListItem>Tues - {props.tuesHours}</ListItem>
        <ListItem>Weds - {props.wedsHours}</ListItem>
        <ListItem>Thurs - {props.thursHours}</ListItem>
        <ListItem>Fri - {props.friHours}</ListItem>
        <ListItem>Sat - {props.satHours}</ListItem>
        <ListItem>Sun - {props.sunHours}</ListItem>
      </List>
  </Container>
)

export default SideBar;
