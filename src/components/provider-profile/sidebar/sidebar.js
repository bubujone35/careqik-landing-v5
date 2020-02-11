import React from 'react';
import OfficeHours from './office-hours';
import Insurance from './insurance';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width:1000px) {
  width: 100%;
  justify-content: center;

}
`

const SideBar = (props) => (
  <Container>

  </Container>

)

export default SideBar;
