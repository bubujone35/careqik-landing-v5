import React from "react";
import { FaPhone } from "react-icons/fa";

import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 4rem;
  right: 32px;
  z-index: 99;
  cursor: pointer;

  padding: 1.5rem;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  background: rgba(249, 209, 106, 1);

  @media screen and (max-width:360px) {
  right: 62px;
  }
`
const Link = styled.a`
  color: white;
`
const Floating = () => {
   return (
     <>
      <Button><Link href="tel:1-555-555-5555"><FaPhone size={20}/></Link></Button>
     </>
   )
 }

 export default Floating;
