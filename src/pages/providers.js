import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"


import SocialCard from "../components/cards/social-card"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`


const Providers = () => (
  <Layout>
    <SEO title="Providers" />
    <Wrapper>

      <SocialCard
        title="Dr. Maria Swanson"
        subtitle="Psychiatric nurse practitioner"
      />

      <SocialCard
        title="Dr. Kimberly Maria Jones"
        subtitle="Psychiatric nurse practitioner"
      />

      <SocialCard
        title="Dr. Young Jumangi"
        subtitle="Psychiatric nurse practitioner"
      />

      <SocialCard
        title="Dr. Jackson Pollack"
        subtitle="Psychiatric nurse practitioner"
      />
    </Wrapper>

  </Layout>
)

export default Providers
