import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Styled from "styled-components"

import Layout from '../components/layout'

const getMarkdownPosts = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <div>
      <h1>Blog</h1>
      <StaticQuery
        query={getMarkdownPosts}
        render={data => (
          <>
            <h4>{data.allMarkdownRemark.totalCount}Post</h4> {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <h3>{node.frontmatter.title}
                <span><br/>{node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            ))}
          </>
        )}
      />
    </div>
  </Layout>
)
