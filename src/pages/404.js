import React from "react"
import Layout from "components/Layout"
import Lost from "../images/lost.gif"
import styled from "@emotion/styled"

const NotFound = styled("div")`
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <NotFound>
      <h2>Oops, looks like you're lost!</h2>
      <img alt="lost ghost" src={Lost}></img>
      <p>
        <a href="/">
          Head to the homepage
          <span role="img" aria-label="man fairy">
            🧚🏽‍♂️
          </span>
        </a>
      </p>
    </NotFound>
  </Layout>
)

export default NotFoundPage
