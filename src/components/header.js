import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  height: 58px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  background-color: #1899AB;
  border-bottom: solid 0.5px white;

`

const Left = styled.div`
  margin-left: 1.5rem;
  @media screen and (max-width:420px) {
    margin-left: 1rem;
  }
`
const Right = styled.div`
  display: flex;
`

const SubNav = styled.div`
  background-color: rgba(24, 153, 171, 0.9);
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  font-size: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(249, 209, 106, 1);
  color: white;
`
const NavItem = styled.a`
  margin-right: 1.5rem;

  @media screen and (max-width:420px) {
    margin-right: 1rem;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  &:hover {
    color: #3A7174;
  }
`
const StyledLogo = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: white;
  font-weight: bold;

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  &:hover {
    color: #3A7174;
  }
`


 const Header = () => {
   return (
     <>
      <NavBar>
        <Left><StyledLogo to="/">Careqik</StyledLogo></Left>
        <Right>
          <NavItem><StyledLink to="/">Patients</StyledLink></NavItem>
          <NavItem><StyledLink to="/">Providers</StyledLink></NavItem>
          <NavItem><StyledLink to="/">Contam stct</StyledLink></NavItem>
        </Right>
      </NavBar>
      <SubNav>
        We are accepting new patients!
      </SubNav>
     </>
   )
 }

 export default Header
