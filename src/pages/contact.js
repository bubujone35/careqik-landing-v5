import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from 'gatsby-link'
import styled from "styled-components"
import PrimaryButton from "../components/buttons/primary"

const Wrapper = styled.div`
  padding: 4rem 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 720px;
`
const Title = styled.h2`
  font-size: 3rem;
  color: rgba(51, 132, 154, 0.95);
`
const StyledLabel = styled.label`
  color: rgba(51, 132, 154, 0.95);
  font-size: 1.5rem;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgba(51, 132, 154, 0.95);
  border-radius: 4px;

`
const StyledText = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid rgba(51, 132, 154);
  border-radius: 4px;
  resize: none;
  height: 150px;
`


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

return (
  <Layout>
    <SEO title="Contact" />
    <Wrapper>
    <Title>Contact</Title>
      <form
        name="contact"
        method="post"
        action="/thank-you/"
        data-netlify="true"
        data-secure="true"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <StyledLabel>
            First name
            <br />
            <StyledInput type="text" name="name" onChange={handleChange} />
          </StyledLabel>
        </p>
        <p>
          <StyledLabel>
            Email
            <br />
            <StyledInput type="email" name="email" onChange={handleChange} />
          </StyledLabel>
        </p>
        <p>
          <StyledLabel>
            Message
            <br />
            <StyledText name="message" onChange={handleChange} />
          </StyledLabel>
        </p>

        <p>
          <label>
            Secure Field
            <br />
            <input type="text" name="secure" id="secure" data-secure-field onChange={handleChange} />
          </label>
        </p>

        <p>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </p>
      </form>
      </Wrapper>
  </Layout>
)
}
