import React from "react"
import styled from "styled-components"
import doctor from "../../images/doctor.png"
import SecondaryButton from "../buttons/secondary"


const Container = styled.div`
  display: flex;
  padding: 4rem;
  border: 1px solid #DCDCDC;
  max-width: 1100px;
  margin: 1rem 0rem; 

  box-shadow: 0px 0px 32px rgba(171, 171, 171, 0.15);
  border-radius: 12px;
`
const Avatar = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-right: 1rem;
`
const Image = styled.img`
  max-width: 10rem;
  min-width: 10rem;
  max-height: 10rem;
`

const Meta = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const Title = styled.h3`
  font-size: 3.5rem;
  color: rgba(0, 0, 0, 0.80);
`
const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.9);
`
const TagWrapper = styled.div`
  display: flex;
  padding: 1rem 0rem;
`

const Tag = styled.div`
  border-radius: 100px;
  background: rgba(255, 248, 187, 1);
  padding: 0.25rem 2.5rem;
  margin-right: 1rem;
  border: 1px solid rgba(243, 236, 167, 1);
  color: rgba(185, 121, 47, 0.94);
`
const Content = styled.p`
  font-size: 1.5rem;
`
const Button = styled.button`
  background-color: gray;
`

const SocialCard = (props) => (
    <Container>
      <Avatar>
        <Image src={doctor} alt="doctor" />
      </Avatar>
      <Meta>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <TagWrapper>
          <Tag>#Depression</Tag>
          <Tag>#PTSD</Tag>
          <Tag>#EMDR</Tag>
        </TagWrapper>
        <Content>
          Eleifend option congue nihil, imperdiet doming id quod mazim placerat. Notare quam littera gothica quam nunc putamus parum claram anteposuerit. Soluta nobis facer possim, assum typi non habent claritatem insitam est usus legentis. Laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim veniam quis nostrud. Ex ea commodo consequat duis autem vel eum, iriure dolor in hendrerit in vulputate velit? Lobortis nisl ut aliquip esse molestie consequat vel illum dolore eu feugiat nulla. Iusto odio dignissim, qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </Content>
        <SecondaryButton>
          View Profile
        </SecondaryButton>
      </Meta>
    </Container>
)

export default SocialCard;
