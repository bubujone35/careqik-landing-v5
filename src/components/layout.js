/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header";
import MainFooter from "../components/footer"


import "./layout.css"
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1460px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  box-shadow: 0px 4px 16px rgba(17, 122, 155, 0.2);
  border-radius: 4px;
`

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
          <main>{children}</main>
        <MainFooter />
      </Wrapper>
    </>
  )
}

export default Layout
