import React from 'react';
import BasicCard from '../../cards/basic'

import styled from 'styled-components';



const ContactForm = () => (
  <BasicCard>
  <form
    action="mailto:ryan@careqik.com"
    name="contact"
    method="post"
    enctype="text/plain"
    autocomplete="off"
  >
    <p>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
    </p>
    <p>
      <label for="message">Message</label>
      <input type="text" name="comment" id="message" />
    </p>
    <p>
      <button type="submit" id="submit">
        Send
      </button>
    </p>
  </form>
  </BasicCard>
);

export default ContactForm;
