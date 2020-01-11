import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"

import Layout from '../components/layout'


const Wrapper = styled.div`
  padding: 8rem;
`

const Card = styled.div`
  background-color: lightgray;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;
`
const Title = styled.h3`
  font-size: 3rem;
`
const Content = styled.p`
  font-size: 1.5rem;
`
const Button = styled.button`
  padding: 1rem 3.5rem;
  margin-top: 1rem;
`

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
    <Wrapper>
      <h1>Blog</h1>
      <StaticQuery
        query={getMarkdownPosts}
        render={data => (
          <>
            <h4>{data.allMarkdownRemark.totalCount}Post</h4> {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card>
              <div key={node.id}>
                <Title>{node.frontmatter.title}
                <span><br/>{node.frontmatter.date}</span>
                </Title>
                <Content>{node.excerpt}</Content>
              </div>
              <Button>Read More</Button>
              </Card>
            ))}
          </>
        )}
      />
    </Wrapper>
  </Layout>
)
