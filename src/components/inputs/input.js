import styled from "styled-components";

export const Input = styled.input.attrs(props => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Enter Value"
}))`
  font-size: 1rem;
  padding: 1.7rem;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.error ? '#E84D38' : '#1899AB'};
  border-radius: 4px;
  &:focus {
  background-color: #FCFCFC;
  color: #6A999C;
  }
  @media screen and (max-width:560px) {
  /* width: 200px; */
}
`

export const Message = styled.input.attrs(props => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Enter Value"
}))`
  font-size: 1rem;
  padding: 1rem;
  padding-bottom: 8rem;
  margin: 1rem;
  width: 75%;
  max-width: 600px;
  overflow: hidden;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.error ? '#E84D38' : 'green'};
  border-radius: 4px;
  &:focus {
  background-color: #FCFCFC;
  color: #6A999C;
  }
`
