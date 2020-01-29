import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from "styled-components"
import PrimaryCard from "../components/cards/primary-card"

import Layout from '../components/layout'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 8rem;
`

const StyledLink = styled(Link)`
  color: #4E888C;
  text-decoration: none;
`
const getMarkdownPosts = graphql`
  {
    allMarkdownRemark(limit: 1000,
      sort: {order: DESC, fields: [frontmatter___date]}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            meta
            title
            subtitle
            date(formatString: "MMMM Do, YYYY")
          }
          excerpt(pruneLength: 500)
        }
      }
    }
  }
`


export default () => (
  <Layout>
    <Wrapper>
      <StaticQuery
        query={getMarkdownPosts}
        render={data => (
          <>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <PrimaryCard
                title={node.frontmatter.title}
                meta={node.frontmatter.date}
                subtitle={node.frontmatter.subtitle}
                content={node.excerpt}
                button=<StyledLink to={`/posts${node.fields.slug}`}>
                  Read more</StyledLink>
              />


            ))}
          </>
        )}
      />
    </Wrapper>
  </Layout>
)
