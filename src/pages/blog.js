import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from "styled-components"

import Layout from '../components/layout'


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8rem;
`

const Card = styled.div`
  padding: 2rem;
  border: 1px solid rgba(79, 67, 1, 0.2);
  border-radius: 8px;
  margin: 0.5rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  flex: 1 1 350px;
  background: linear-gradient(90.4deg, #FCFFDB 0.26%, #FFF5BE 99.71%);
`

const Title = styled.h1`
  font-size: 3.5rem;
  color: rgba(51, 132, 154, 0.95);
  line-height: 1.2;
`
const SubTitle = styled.h3`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.54);
`
const Meta = styled.h4`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 0.1rem;
`

const Content = styled.p`
  font-size: 1.5rem;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  text-align: start;
  margin: 1rem 0rem;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 600;
  color: rgba(51, 132, 154, 0.99);
  background-color: transparent;
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
              <Card key={node.id}>
                <Meta>{node.frontmatter.meta}</Meta>
                <Title>{node.frontmatter.title}</Title>
                <Meta>{node.frontmatter.date}</Meta>
                <SubTitle>{node.frontmatter.subtitle}</SubTitle>
                <Content>{node.excerpt}</Content>
                <Button><StyledLink to={`/posts${node.fields.slug}`}>
                Read more</StyledLink></Button>
              </Card>
            ))}
          </>
        )}
      />
    </Wrapper>
  </Layout>
)
