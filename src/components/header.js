import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  height: 58px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  background-color: white;
  border-bottom: solid 1px gray;
  
`

const Left = styled.div`
  margin-left: 1.5rem;
`
const Right = styled.div`
  display: flex;
`

const SubNav = styled.div`
  background-color: lightgray;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  font-size: 1.5rem;
  padding: 1rem;
`
const NavItem = styled.a`
  margin-right: 1.5rem;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`


 const Header = () => {
   return (
     <>
      <NavBar>
        <Left><StyledLink to="/">Careqik</StyledLink></Left>
        <Right>
          <NavItem><StyledLink to="/">Patients</StyledLink></NavItem>
          <NavItem><StyledLink to="/">Providers</StyledLink></NavItem>
          <NavItem><StyledLink to="/">Contact</StyledLink></NavItem>
        </Right>
      </NavBar>
      <SubNav>
        We are accepting new patients!
      </SubNav>
     </>
   )
 }

 export default Header
