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
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 10px;
  padding-left: 10px;

  background-color: lightgray;
  height: 1200px;

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
