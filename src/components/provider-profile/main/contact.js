import React from 'react';
import styled from 'styled-components';

import BasicCard from '../../cards/basic';
import H3 from '../../headers/h3';


const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;
`
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`
const Right = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`
const Button = styled.button`
  padding: 1.5rem 1.5rem;
  border-radius: 4px;
  background: #FBE6B0;
  color: rgba(51, 132, 154, 0.95);
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid rgba(249, 209, 106, 1);
  outline: none;
  letter-spacing: 0.05em;
  width: 100%;
  margin: 0.5rem;

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  -webkit-backface-visibility: hidden;

  &:hover {
    color: #FDFDFD;
    background: rgba(249, 209, 106, 1);
    border: 2px solid #FBE6B0;
    transform: translateY(-3px);
    box-shadow: 0px 4px 16px rgba(79, 71, 51, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    }
  }
`
const Link = styled.a`
  text-decoration: none;
  color: rgba(51, 132, 154, 0.95);
`

const Contact = () => (
  <BasicCard>
    <H3 title="Contact"/>
    <Content>
      <Left>
        <Button>Start Call</Button>
      </Left>
      <Right>
        <Button>
        <Link href="mailto:someone@something.com?subject=your title&body=The message">
        Send Email</Link></Button>
      </Right>
    </Content>
  </BasicCard>

);

export default Contact;
