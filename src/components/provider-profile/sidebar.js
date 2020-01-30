import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 1rem;
  background-color: white;
  min-width: 300px;
  padding: 4rem;
  margin: 1rem;
  border-radius: 8px;
  /* border: 1px solid rgba(0, 0, 0, 0.10);
  box-shadow: 0px 0px 32px rgba(58, 113, 116, 0.2); */

`
const Title = styled.h3`
  font-size: 2.5rem;
`
const Content = styled.div`

`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-position: inside;
  font-size: 1.5rem;
  margin-top: 2rem;
  color: black;
  @media screen and (max-width:560px) {
}
`
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`

const SideBar = (props) => (
  <Container>
    <Title>Office Hours</Title>
    <Content>
      <List>
        <ListItem>Mon -  {props.monHours}</ListItem>
        <ListItem>Tues - {props.tuesHours}</ListItem>
        <ListItem>Weds - {props.wedsHours}</ListItem>
        <ListItem>Thurs - {props.thursHours}</ListItem>
        <ListItem>Fri - {props.friHours}</ListItem>
        <ListItem>Sat - {props.satHours}</ListItem>
        <ListItem>Sun - {props.sunHours}</ListItem>
      </List>
    </Content>
  </Container>
)

export default SideBar;
