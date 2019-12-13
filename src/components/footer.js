import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { Link } from "gatsby";


import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rebeccapurple;
  height: 300px;
  bottom: 0
  position: absolute;
  justify-content: center;
`

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: normal;
  text-align: center;
  line-height: 1.5rem;
  color: white;
  padding-bottom: 1rem;
`
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
  max-width: 300px;
  text-decoration: none;
  margin-top: 1rem; 
`
const StyledIcon = styled.a`
  display: inline-block;
  color: gray;
  text-decoration: none;
  &:hover {
    color: lightgray;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.3s;
  }
`

const StyledLink = styled(Link)`
  color: var(--primaryWhite);
  text-decoration: none;
  padding: 2rem;
  &:hover {
    color: var(--primaryGreen);
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.3s;
  }
`


const MainFooter = () => (
  <>
    <Container>
      <StyledLink to="/">Careqik Inc.</StyledLink>
      <Subtitle>hello@careqik.com<br/>999 Random Place<br/>
      Chicago, Illinois, 60607<br/>
      </Subtitle>
      <Icons>
        <StyledIcon href="https://www.linkedin.com/company/careqik" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedinIn size={26}/>
        </StyledIcon>

        <StyledIcon href="https://www.facebook.com/Careqik-2739261906084783" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebookF size={26}/>
        </StyledIcon>

        <StyledIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram size={26}/>
        </StyledIcon>

        <StyledIcon href="https://www.medium.com" target="_blank" rel="noopener noreferrer" title="Medium">
            <FaMediumM size={26}/>
        </StyledIcon>
      </Icons>
    </Container>
  </>
)

export default MainFooter;
