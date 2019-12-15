import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/banner"
import Works from "../components/works"
import Treatment from "../components/treatment"
import Specialties from "../components/specialties"
import Partners from "../components/partners"
import Cta from "../components/cta"
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
    <Floating />
  </Layout>
)

export default IndexPage
