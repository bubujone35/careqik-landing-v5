import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { StaticQuery, graphql, Link } from 'gatsby'
import PrimaryCard from '../components/cards/primary-card'

import styled from "styled-components";

const getMarkdownPosts = graphql`
  {
    allMarkdownRemark(limit: 3,
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
          excerpt
        }
      }
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem;
  flex-wrap: wrap;
  /* background-color: #52ADAF; */
  background-color: #1899AB;

  @media screen and (max-width:560px) {
  padding: 1rem;
}
`
const Blog = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 2rem 2rem 2rem;
  align-items: start;
`
const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
`
const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding-top: 6rem;
  color: rgba(51, 132, 154, 0.98);
  font-weight: 600;
  background-color: transparent;
`
const SubHeading = styled.p`
  font-size: 2rem;
  color: rgba(51, 132, 154, 0.98);
`

const Title = styled.h1`
  font-size: 3.5rem;
  color: rgba(51, 132, 154, 0.95);
  line-height: 1.2;
`

const StyledLink = styled(Link)`
  color: #4E888C;
  text-decoration: none;
`


const Posts = () => (
  <StaticQuery
    query={getMarkdownPosts}
    render={data => (
    <>
    <Wrapper>
      <Blog>
        <BlogHeader>
          <Title>The Careqik Blog</Title>
          <SubHeading>Wellness tips and news</SubHeading>
        </BlogHeader>
        <ViewAllButton><StyledLink to="/blog">View all</StyledLink><IoIosArrowRoundForward size={26}/></ViewAllButton>
      </Blog>
        <Container>
          {data.allMarkdownRemark.edges.map(({ node }) =>(
            <PrimaryCard
              title={node.frontmatter.title}
              meta={node.frontmatter.date}
              subtitle={node.frontmatter.subtitle}
              content={node.excerpt}
              button=<StyledLink to={`/posts${node.fields.slug}`}>
                Read more</StyledLink>
            />
        ))}
        </Container>
      </Wrapper>
    </>
  )}
 />
)

 export default Posts;
