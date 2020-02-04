import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
  border-radius: 100px;
  background-color: white;
  display: flex;
  width: 78%;
`
const StyledInput = styled.input`
  flex: 2;
  background: none;
  border: 0;
  min-width: 0;
  -webkit-box-flex: 1;
  flex: 3;
  color: #fff;
  padding: .5rem 1rem;
  border-top-left-radius: 27px;
  border-bottom-left-radius: 27px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  -webkit-appearance: unset;

  font-size: 1.5rem;
  padding: 1.5rem;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(51, 132, 154, 0.95);
  }
  :-ms-input-placeholder {
     color: rgba(51, 132, 154, 0.95);
  }

  &:focus {
    background-color: #FCFCFC;
    color: #6A999C;
  }
`
const StyledButton = styled.button`
  flex: 1;
  padding: 1.5rem 3rem;
  border: none;
  border-radius: 0px 100px 100px 0px;
  background: #FBE6B0;
  color: rgba(51, 132, 154, 0.95);
  letter-spacing: 0.05em;
  font-size: 1.7rem;
  cursor: pointer;
  font-size: 1.5rem;
  border-left: 1px solid rgba(249, 209, 106, 1);
  font-weight: bold;

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  -webkit-backface-visibility: hidden;

  &:hover {
    color: #FDFDFD;
    background: rgba(249, 209, 106, 1);
  }

`


const SearchBar = () => (
  <StyledSearchBar>
    <StyledInput type="text" placeholder="Search providers by city, state, or zipcode"/>
    <StyledButton>Search</StyledButton>
  </StyledSearchBar>
);

export default SearchBar;
