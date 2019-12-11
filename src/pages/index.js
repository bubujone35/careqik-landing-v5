import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/banner"

import Floating from "../components/buttons/floating"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Floating />
  </Layout>
)

export default IndexPage
