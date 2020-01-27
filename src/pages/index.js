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
      <form name="contact" method="post" netlify-honeypot="b" autocomplete="off" data-netlify data-secure>
        <p>
          <label for="name">Basic Field</label>
          <input type="text" name="name" id="name" />
        </p>

        <p>
          <label for="secure">Secure Field</label>
          <input type="text" name="secure" id="secure" data-secure-field />
        </p>
        <p>
          <button type="submit" id="submit">Send</button>
        </p>
      </form>
    </div>
  </Layout>
)

export default IndexPage
