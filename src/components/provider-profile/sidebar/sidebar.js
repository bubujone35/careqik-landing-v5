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
  <OfficeHours
    monHours="8:00am-4:00pm"
    tuesHours="8:00am-4:00pm"
    wedsHours="8:00am-4:00pm"
    thursHours="8:00am-4:00pm"
    friHours="8:00am-4:00pm"
    satHours="8:00am-4:00pm"
    sunHours="8:00am-4:00pm"
  />
  <Insurance />
</Container>

)

export default SideBar;
