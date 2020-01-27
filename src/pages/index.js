import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/banner"
import Works from "../components/works"
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
    <Works />
    <Treatment />
    <Partners />
    <Specialties />
    <Cta />
    <Posts />
    <Subscribe />
    <Floating />
    <div>
      <h3>Secure Form</h3>

      <form
        name="contact"
        method="post"
        autocomplete="off"
        data-netlify="true"
        secure
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label for="name">Basic Field</label>
          <input type="text" name="name" id="name" />
        </p>

        <p>
          <label for="ssn">Secure Field</label>
          <input type="text" name="ssn" id="ssn" data-secure-field />
        </p>
        <p>
          <button type="submit" id="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  </Layout>
)

export default IndexPage
