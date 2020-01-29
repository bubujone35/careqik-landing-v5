import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  background-color: red;
  width: 100%;
`

const StyledIcon = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;
  cursor: pointer; 
  &:hover {
    color: #3A7174;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.3s;
  }
`

const SocialIcons = (props) => (
  <Wrapper>
    <StyledIcon
      href={props.url}>
      <FaLinkedinIn size={26}/>
    </StyledIcon>
  </Wrapper>
)

export default SocialIcons;
