import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import dimensions from "styles/dimensions"
import { Link } from "gatsby"
// import Button from "../components/_ui/Button"
import og_img from "images/og-img.jpg"
import colors from "../styles/colors"
import ScrollAnimation from "react-animate-on-scroll"

const CasestudyCardContainer = styled(Link)`
  display: block;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;
  height: 350px;

    //   background: ${colors.blue100};
  @media (max-width: 950px) {

  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: auto;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    height: auto;
  
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.3);
    transition: all 150ms ease-in-out;

    .CasestudyCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .CasestudyCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .CasestudyCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }

`

const CasestudyCardContent = styled("div")`
//   background: white;
width: 40%;
display: inline-block;
vertical-align:top;
  padding: 3em 0 2.25em 2.25em;
  position: relative;
  strong {
    font-weight: 400;
  }
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    // background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  @media (max-width: 950px) {
    
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    display: block;
  }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
        width: 100%;
  }

`

const CasestudyCardTitle = styled("h3")`
  margin-bottom: 1.2em;
  margin-top: 0.2em;
`

const CasestudyCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 3em;
  font-size: 0.9em;
  color: ${colors.grey800};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2em;
  }
`

const CasestudyCardAction = styled("div")`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const CasestudyCardImageContainer = styled("div")`
//   background: ${colors.grey200};
  width: 60%;
  height: 100%;
  margin: auto;
  display: inline-block;
  overflow: hidden;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: block;
    width: 100%;
    height: 300px;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
    width: 100%;
    height: 300px;
  }

  img {

    width: 100%;

    @media (max-width: ${dimensions.maxwidthTablet}px) {

    }
  }

  .gcc-vac-img{
    width: 1000px;
    bottom: 40px;
    right: 30%;
    position: relative;
    @media (max-width: 950px) {
    right: 50%;
    }
  
    @media (max-width: ${dimensions.maxwidthTablet}px) {
        right: 20%;
    }
  
      @media (max-width: ${dimensions.maxwidthMobile}px) {
      display: block;
      right: 70%;
    }
    }

    .ep-img{
      width: 600px;
      bottom: 40px;
      top: 5%;
      position: relative;
      @media (max-width: 950px) {
      // right: 50%;
      }
    
      @media (max-width: ${dimensions.maxwidthTablet}px) {
          left: 10%;
          top: -3%;
      }
    
        @media (max-width: ${dimensions.maxwidthMobile}px) {
        display: block;
        left: -10%;
      }
      }
`

const ProjectsHead = styled("div")`
  margin-bottom: 3em;
  h1 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0px;
  }
`

const ComingSoon = styled("h3")`
  text-align: center;
  color: ${colors.grey600};
`

const Projects = ({ meta }) => (
  <>
    <Helmet
      title="Case Studies"
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          name: `theme-color`,
          content: colors.blue600,
        },
        {
          property: `og:title`,
          content: `Case Studies | ${meta.title}`,
        },
        {
          property: `og:description`,
          content: "Case studies of notable design projects by Deepak!",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: og_img,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: `Case Studies | ${meta.title}`,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <ProjectsHead>
        <h1>Case Studies</h1>
        <p>
          Here are the case studies of some of my notable design projects
          <span role="img" aria-label="scroll-emoji">
            📜
          </span>
          !
        </p>
      </ProjectsHead>
      <>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          <CasestudyCardContainer to={`/casestudy/gccvac`}>
            <CasestudyCardContent className="CasestudyCardContent">
              <CasestudyCardTitle>
                GCC Vaccination Booking Portal
              </CasestudyCardTitle>
              <CasestudyCardBlurb>
                <p>Enabling safe COVID-19 vaccination for Chennai!</p>
              </CasestudyCardBlurb>
              <CasestudyCardAction className="CasestudyCardAction">
                View Case Study <span>&#8594;</span>
              </CasestudyCardAction>
            </CasestudyCardContent>
            <CasestudyCardImageContainer className="CasestudyCardImageContainer">
              <img
                src={require("../images/projects/gcc/mock0.png")}
                alt="GCC Vaccination Booking Portal"
                className="gcc-vac-img"
              />
            </CasestudyCardImageContainer>
          </CasestudyCardContainer>
          <CasestudyCardContainer to={`/casestudy/election-promises`}>
            <CasestudyCardContent className="CasestudyCardContent">
              <CasestudyCardTitle>Election Promises</CasestudyCardTitle>
              <CasestudyCardBlurb>
                <p>Helping citizens make informed voting decision!</p>
              </CasestudyCardBlurb>
              <CasestudyCardAction className="CasestudyCardAction">
                View Case Study <span>&#8594;</span>
              </CasestudyCardAction>
            </CasestudyCardContent>
            <CasestudyCardImageContainer className="CasestudyCardImageContainer">
              <img
                src={require("../images/projects/ep/ep-mock.png")}
                alt="Election Promises Portal"
                className="ep-img"
              />
            </CasestudyCardImageContainer>
          </CasestudyCardContainer>
          <ComingSoon className="">More case studies coming soon!</ComingSoon>
        </ScrollAnimation>
      </>
    </Layout>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata
  return <Projects meta={meta} />
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
