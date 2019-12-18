import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  flex-wrap: wrap;
`
const Blog = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
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

`

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
`
const Heading = styled.h2`
  font-size: 3rem;
`
const SubHeading = styled.p`
  font-size: 2rem
`

const Card = styled.div`
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  margin: 0.5rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  flex: 1 1 350px;
  background-color: white;
`
const Title = styled.h1`
  font-size: 3.5rem;
`
const SubTitle = styled.h3`
  font-size: 2rem;
`
const Content = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0rem;
`
const Button = styled.button`
  text-decoration: none;
  border: none;
  text-align: start;
  margin: 1rem 0rem;
  font-size: 1.5rem;
  cursor: pointer;
`

const Posts = () => (
  <>
  <Wrapper>
    <Blog>
      <BlogHeader>
        <Title>The Careqik Blog</Title>
        <SubHeading>Wellness tips and news</SubHeading>
      </BlogHeader>
      <ViewAllButton>View all posts<IoIosArrowRoundForward size={26}/></ViewAllButton>
    </Blog>
      <Container>
        <Card>
          <Title>Mental health and the holidays</Title>
          <SubTitle>How to take care of yourself</SubTitle>
          <Content>The holidays can be a tough time for a lot of people. Having depression or anxiety can compound the stressors already associated with the holidays. Learn 5 techniques you can implement today to ease the stress.</Content>
          <Button>Read more</Button>
        </Card>
        <Card>
          <Title>The 12-steps revisited</Title>
          <SubTitle>An alternate view to staying sober</SubTitle>
          <Content>AA can be a major component of recovery from alcohol and substance abuse. Many persons in sustained recovery credit the 12-steps to much of their success. Get an introduction to the 12-steps with Dr. Lee.</Content>
          <Button>Read more</Button>
        </Card>
        <Card>
          <Title>Sleep improves depression ratings</Title>
          <SubTitle>How sleep hygiene can improve your health</SubTitle>
          <Content>Recent studies evaluating the impact of sleep upon mental health outcomes has revealed that increasing the qualty of your sleep can have major improvements on mood and quality of life. </Content>
          <Button>Read more</Button>
        </Card>
      </Container>
      <Subscribe>
        <Heading>Stay Updated!</Heading>
        <SubHeading>Get our latest blog posts, wellness tips and more <br/>straight to your inbox.</SubHeading>
      </Subscribe>
    </Wrapper>
  </>
   )

 export default Posts;
