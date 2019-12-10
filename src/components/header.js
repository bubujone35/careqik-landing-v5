import React from "react";

 import styled from "styled-components";

const NavBar = styled.div`
  background-color: gray;
  display: flex;
  height: 44px;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  background-color: rebeccapurple;
`
const Right = styled.div`
  background-color: orangered;
  display: flex;
`

const SubNav = styled.div`
  background-color: cyan;
  height: 24px;
  display: flex;
  justify-content: center;
`
const NavItem = styled.a`
  margin-right: 2rem;
`

 const Header = () => {
   return (
     <>
      <NavBar>
        <Left>Careqik</Left>
        <Right>
          <NavItem>Patients</NavItem>
          <NavItem>Providers</NavItem>
          <NavItem>Contact</NavItem>
        </Right>
      </NavBar>
      <SubNav>
        We are accepting new patients!
      </SubNav>
     </>
   )
 }

 export default Header
