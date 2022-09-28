import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Education from "../components/Education"
import styled from "@emotion/styled"
import colors from "styles/colors"
import typefaces from "styles/typefaces"
import Layout from "components/Layout"
import Awards from "../components/Awards"
import Publications from "../components/Publications"
import Volunteering from "../components/Volunteering"
import Certifications from "../components/Certifications"
import Experiences from "../components/Experiences"
import GetInTouch from "../components/GetInTouch"
import og_img from "images/og-img.jpg"
import dimensions from "styles/dimensions"
import Ventures from "../components/Ventures"
import ColoredTags from "../components/ColoredTags"

const ResumeHead = styled("div")`
  margin-bottom: 3em;
  h1 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0px;
  }
`
const ResumeContainer = styled("section")`
  h3 {
    margin: 40px 0px 10px 0px;
    color: ${colors.grey600};
  }

  h4 {
    margin: 0px 0px 0px 0px;
  }

  h5 {
    margin: 0px 0px 4px 0px;
    font-size: 0.8em;
    font-weight: 600;
    color: ${colors.grey700};
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-family: ${typefaces.sansSerif};
  }

  p {
    margin: 5px 0px 15px 0px;
    font-size: 0.85em;
    line-height: 1.5;
    color: ${colors.grey800};
  }

  .info-unit {
    margin-bottom: 10px;
  }

  .float-right {
    float: right;
    font-weight: 300;
    display: inline-block;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      display: block;
      float: none;
    }
  }

  .read-more-btn {
    color: ${colors.blue600};
  }

  .heading-link {
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    span {
      margin-left: 1em;
      transform: translateX(-8px);
      display: inline-block;
      transition: transform 400ms ease-in-out;
    }
    &:hover {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;
      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }

  // .skill-list {
  //   text-align: left;
  //   padding: 0px 0px 0px 15px;
  // }

  // .skill-list li {
  //   padding-bottom: 5px;
  // }

  // .skill-tooltip {
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: nowrap;
  //   width: 100%;
  // }

  // .skill-tooltip span {
  //   // display: flex;
  //   // flex-direction: column;
  //   // flex: 1;
  //   text-align: left;
  //   padding: 0px 10px 0px 0px;
  // }

  // .skill-tooltip .rating p {
  //   display: inline-block;
  //   margin: 0px;
  //   font-size: inherit;
  //   color: ${colors.grey500};
  // }

  // .skill-tooltip span:first-of-type {
  //   flex-shrink: 0;
  //   flex: 2;
  // }
`

const Resume = ({ resume, meta }) => (
  <>
    <Helmet
      title={`Resume`}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: `A quick snapshot of my education, recognitions, skills, etc...`,
        },
        {
          property: `og:title`,
          content: `Resume | ${meta.title}`,
        },
        {
          property: `og:description`,
          content: `A quick snapshot of my education, recognitions, skills, etc...`,
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
          content: `Resume | ${meta.title}`,
        },
        {
          name: `twitter:description`,
          content: `A quick snapshot of my education, recognitions, skills, etc...`,
        },
      ].concat(meta)}
    />
    <Layout>
      <ResumeHead>
        <h1>Resume</h1>
        <p>
          A quick snapshot of my experiences, education, recognitions, skills, etc, etc... :)
        </p>
      </ResumeHead>
      <ResumeContainer>
        <Experiences experiences={resume.experiences}></Experiences>
        <Ventures ventures={resume.ventures}></Ventures>
        <Education courses={resume.education}></Education>
        <Awards awards={resume.awards} numberOfItemsToShow = {3}></Awards>
        <h3>Skills</h3>
        <ColoredTags tags={resume.skills}></ColoredTags>
        <h3>Tools</h3>
        <ColoredTags tags={resume.tools}></ColoredTags>
        <Publications publications={resume.publications}></Publications>
        <Certifications certifications={resume.certifications}></Certifications>
        <Volunteering volunteering={resume.volunteering}></Volunteering>
        <GetInTouch />
      </ResumeContainer>
    </Layout>
  </>
)

Resume.propTypes = {
  meta: PropTypes.object.isRequired,
  resume: PropTypes.object.isRequired,
}

export default ({ data }) => {
  const doc = data.prismic.allResumes.edges.slice(0, 1).pop()
  const meta = data.site.siteMetadata
  if (!doc) return null
  return <Resume resume={doc.node} meta={meta} />
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
    prismic {
      allResumes {
        edges {
          node {
            awards {
              description
              institution
              year
              name
              link {
                _linkType
                ... on PRISMIC__ExternalLink {
                  target
                  _linkType
                  url
                }
              }
            }
            certifications {
              description
              institution
              year
              name
              link {
                _linkType
                ... on PRISMIC__ExternalLink {
                  target
                  _linkType
                  url
                }
              }
            }
            experiences {
              description
              institution
              year
              name
              link {
                _linkType
                ... on PRISMIC__ExternalLink {
                  target
                  _linkType
                  url
                }
              }
            }
            ventures {
              description
              institution
              year
              name
              link {
                _linkType
                ... on PRISMIC__ExternalLink {
                  target
                  _linkType
                  url
                }
              }
            }              
            education {
              courseName
              institutionName
              period
            }
            publications {
              description
              publication_name
              title
              link {
                _linkType
                ... on PRISMIC__ExternalLink {
                  target
                  _linkType
                  url
                }
              }
            }
            skills {
              name
              color
            }
            tools {
              name
              color
            }
            volunteering {
              description
              orgName
              title
              timeframe
              link {
                _linkType
                ... on PRISMIC__ExternalLink {
                  target
                  _linkType
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
