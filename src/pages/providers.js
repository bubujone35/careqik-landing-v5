import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`


const Providers = () => (
  <Layout>
    <SEO title="Providers" />

    <div>this is the providers page</div>

  </Layout>
)

export default Providers;
