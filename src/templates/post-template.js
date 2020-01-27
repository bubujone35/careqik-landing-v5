import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import PrimaryCard from '../components/cards/primary-card'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0rem; 
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

export default ({ data: post }) => (
  <Layout>
  <Wrapper>
      <PrimaryCard
        title={post.markdownRemark.frontmatter.title}
        meta={post.markdownRemark.frontmatter.date}
        subtitle={post.markdownRemark.frontmatter.subtitle}
        content={post.markdownRemark.excerpt}
      />

      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query($slug:String!) {
    markdownRemark(fields: {
      slug:{ eq:$slug }
    }) {
      html
      frontmatter {
        title
        meta
        title
        subtitle
        date(formatString: "MMMM Do, YYYY")
      }
      excerpt(pruneLength: 10000)
    }
  }
`
