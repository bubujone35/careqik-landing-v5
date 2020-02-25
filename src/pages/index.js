import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/banner"
import Works from "../components/works"
import Search from "../components/search/search"
import Treatment from "../components/treatment"
import Specialties from "../components/specialties"
import Partners from "../components/partners"
import Cta from "../components/cta"
import Posts from "../components/posts"
import Subscribe from "../components/subscribe"

import Floating from "../components/buttons/floating"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Search />
    <Works />
    <Treatment />
    <Partners />
    <Specialties />
    <Cta />
    <Posts />
    <Subscribe />
    <Floating />

    <h3>Secure Form</h3>
    <form
      name="contact-index"
      method="post"
      autocomplete="off"
      data-netlify-honeypot="bot-field"
      data-netlify
      data-secure
    >
      {/* <input type="hidden" name="form-name" value="contact" /> */}
      <input type="hidden" name="form-name" value="contact-index" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label for="name">Basic Field</label>
        <input type="text" name="name" id="name" />
      </p>
      <p>
        <label for="ssn">Secure Field</label>
        <input type="text" name="secure" id="ssn" data-secure-field />
      </p>
      <p>
        <button type="submit" id="submit">
          Send
        </button>
      </p>
    </form>
  </Layout>
)

export default IndexPage
