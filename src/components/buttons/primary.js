import React from "react";

import styled from "styled-components";

const PrimaryButton = styled.button`
  background: #FBE6B0;
  color: rgba(51, 132, 154, 0.95);
  font-size: 1.7rem;
  font-weight: bold;
  padding: 1.5rem 4rem;
  border: 2px solid rgba(249, 209, 106, 1);
  border-radius: 4px;
  outline: none;
  letter-spacing: 0.05em;

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  -webkit-backface-visibility: hidden;
  /* -webkit-transform: translateZ(0) scale(1.0, 1.0); */

  &:hover {
    color: #FDFDFD;
    background: rgba(249, 209, 106, 1);
    border: 2px solid #FBE6B0;
    transform: translateY(-3px);
    /* box-shadow: 0px 2px 10px rgba(188, 47, 174, 0.49); */
    box-shadow: 0px 4px 16px rgba(79, 71, 51, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    }
  }

  @media screen and (max-width:560px) {
  width: 100%;
  }
`
