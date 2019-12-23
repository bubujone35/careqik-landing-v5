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
const Posts = () => (
  <>
  <Wrapper>
    <Blog>
      <BlogHeader>
        <Title>The Careqik Blog</Title>
        <SubHeading>Wellness tips and news</SubHeading>
      </BlogHeader>
      <ViewAllButton>View all<IoIosArrowRoundForward size={26}/></ViewAllButton>
    </Blog>
      <Container>
        <Card>
          <Meta>Wellness</Meta>
          <Title>Mental health and the holidays</Title>
          <SubTitle>How to take care of yourself</SubTitle>
          <Content>The holidays can be a tough time for a lot of people. Having depression or anxiety can compound the stressors already associated with the holidays. Learn 5 techniques you can implement today to ease the stress.</Content>
          <Button>Read more<IoIosArrowRoundForward size={26}/></Button>
        </Card>
        <Card>
          <Meta>Recovery</Meta>
          <Title>The 12-steps revisited, again</Title>
          <SubTitle>An alternate view to staying sober</SubTitle>
          <Content>AA can be a major component of recovery from alcohol and substance abuse. Many persons in sustained recovery credit the 12-steps to much of their success. Get an introduction to the 12-steps with Dr. Lee.</Content>
          <Button>Read more<IoIosArrowRoundForward size={26}/></Button>
        </Card>
        <Card>
          <Meta>Depression</Meta>
          <Title>Sleep improves depression ratings</Title>
          <SubTitle>How sleep hygiene can improve your health</SubTitle>
          <Content>Recent studies evaluating the impact of sleep upon mental health outcomes has revealed that increasing the qualty of your sleep can have major improvements on mood and quality of life. </Content>
          <Button>Read more<IoIosArrowRoundForward size={26}/></Button>
        </Card>
      </Container>
    </Wrapper>
  </>
   )

 export default Posts;
