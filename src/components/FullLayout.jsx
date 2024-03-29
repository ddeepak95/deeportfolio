import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global } from "@emotion/core"
import globalStyles from "styles/global"
import typeStyles from "styles/typography"
import dimensions from "styles/dimensions"
import Footer from "components/Footer"
import Header from "components/Header"
import "styles/fonts.scss"

const Wrapper = styled.div``

const FullLayoutContainer = styled.div`
  max-width: 100%;
//   padding-left: ${dimensions.paddingHorizontalDesktop}em;
//   padding-right: ${dimensions.paddingHorizontalDesktop}em;
  margin: 0 auto;
  overflow: hidden;

//   @media (max-width: ${dimensions.maxwidthTablet}px) {
//     padding-left: ${dimensions.paddingHorizontalTablet}em;
//     padding-right: ${dimensions.paddingHorizontalTablet}em;
//   }

//   @media (max-width: ${dimensions.maxwidthMobile}px) {
//     padding-left: ${dimensions.paddingHorizontalMobile}em;
//     padding-right: ${dimensions.paddingHorizontalMobile}em;
//   }

  .Layout__content {
    padding-bottom: 5em;
  }
`

const FullLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query FullLayoutSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header />
        <FullLayoutContainer className="div">
          <Global styles={[globalStyles, typeStyles]} />
          <div className="Layout">
            <main className="Layout__content">{children}</main>
            <Footer />
          </div>
        </FullLayoutContainer>
      </Wrapper>
    )}
  />
)

FullLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullLayout
