import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  padding: 6rem 4.5rem;
  background-color: #FAFAFA;
  /* justify-content: space-between; */
  flex-wrap: wrap;


  @media screen and (max-width:560px) {
  padding: 0rem;
}
`

const Wrapper = styled.div`
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 8px;
  background: rgba(255, 248, 187, 1);
  border: 1px solid rgba(243, 236, 167, 1);
  box-shadow: 0px 0px 32px rgba(25, 154, 171, 0.15);

  @media screen and (max-width:560px) {
  padding: 1rem;
  border: none;
}
`
const Message = styled.p`
  font-size: 2rem;
  color: rgba(185, 121, 47, 0.94); 
`

const ThankYou = () => (
  <Layout>
    <SEO title="success" />
    <Container>
      <Wrapper>
        <Message>Thank you for your submission!</Message>
      </Wrapper>
    </Container>
  </Layout>
)

export default ThankYou
