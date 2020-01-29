import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: background: #F0F0F0; 
  padding: 2rem;
  border: solid 1px gray;
  border-radius: 8px;
`


const BasicCard = (props) => (
  <Container>
    {props.children}
  </Container>
)

export default BasicCard;
