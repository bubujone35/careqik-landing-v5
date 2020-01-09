import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { StaticQuery, graphql, Link } from 'gatsby'

import styled from "styled-components";

const getMarkdownPosts = graphql`
  {
    allMarkdownRemark(limit: 3, sort: {order: DESC, fields: [frontmatter___date]}) {
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
            date
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
  margin-top: 1rem;
`
const Meta = styled.h4`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 0.1rem;
`
const Content = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0rem;
  color: rgba(0, 0, 0, 0.9);
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
          <Card key={node.id}>
            <Meta>{node.frontmatter.meta}</Meta>
            <Title>{node.frontmatter.title}</Title>
            <Meta>{node.frontmatter.date}</Meta>
            <SubTitle>{node.frontmatter.subtitle}</SubTitle>
            <Content>{node.excerpt}</Content>
            <Button><StyledLink to={`/posts${node.fields.slug}`}>
            Read more</StyledLink><IoIosArrowRoundForward size={26}/>
            </Button>
          </Card>
        ))}
        </Container>
      </Wrapper>
    </>
  )}
 />
)

 export default Posts;
