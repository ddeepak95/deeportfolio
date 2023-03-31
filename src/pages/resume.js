import React, { Fragment } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Education from "../components/Education"
import styled from "@emotion/styled"
import colors from "styles/colors"
import typefaces from "styles/typefaces"
import Layout from "components/Layout"
import Awards from "../components/Awards"
// import Publications from "../components/Publications"
import Volunteering from "../components/Volunteering"
import Certifications from "../components/Certifications"
// import Experiences from "../components/Experiences"
// import GetInTouch from "../components/GetInTouch"
import og_img from "images/og-img.jpg"
import dimensions from "styles/dimensions"
// import Ventures from "../components/Ventures"
import Skills from "../components/Skills"
import Tools from "../components/Tools"

const ResumeHead = styled("div")`
  margin-bottom: 30px;
  h1 {
    margin-bottom: 5px;
    text-align: center;
  }
  p {
    margin-top: 0px;
  }
`
const Experience = styled("div")``

const ResumeContainer = styled("section")`

  .work-head{
    margin-top: 0px;
  }
  
  a {
      text-decoration: none;
      color: currentColor;
      span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
      }
      &:hover {
        transition: all 150ms ease-in-out;
        color: ${colors.blue500};   
          span {
            transform: translateX(0px);
            opacity: 1;
            transition: transform 150ms ease-in-out;
          }      
      }
  }

  h2 {
    text-align:left;
    margin: 70px 0px 20px 0px;
    font-size: 1.6em;
    color: ${colors.blue700};
  }

  h3 {
    margin: 10px 0px 10px 0px;
    color: ${colors.grey600};
  }

  h3:not(:first-child) {
    margin-top: 40px;
  }
  .work-desc{
    font-size: 1em;
    text-align: center;
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

  .container-link {
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    span {
      margin-left: 1em;
      transform: translateX(-8px);
      display: inline-block;
      transition: transform 400ms ease-in-out;
    }
    p {
      font-family: ${typefaces.serif};
      font-size: 0.9em;
      font-weight: 600;
      margin-bottom: 0px;
    }
    &:hover {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;
      .arrow {
        color: ${colors.blue500};
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
      p {
        color: ${colors.blue500};
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

  .experience-container{
    display: block;
    margin-bottom: 10px;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.05);
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;
    border: solid 1px ${colors.grey100};
    border-radius: 10px;
    padding: 10px;
    &:hover {
      box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.15);
      transition: all 150ms ease-in-out;
  
      p {
        color: ${colors.blue500};
        transition: all 150ms ease-in-out;
  
        span {
          transform: translateX(0px);
          opacity: 1;
          transition: transform 150ms ease-in-out;
        }
      }
    }
  }

  .experience-image {
    width: 50px;
    display: inline-block;
    margin-right: 5px;
    margin-top: 10px;
    vertical-align: top;
    @media (max-width: 300px) {
      display: block;
    }
  }
  .experience-image img{
    width: 50px;
  }

  .flourish .experience-image img{
    width: 40px;
    margin-left: 5px;
  }

  .experience-content {
    display: inline-block;
    width: calc(100% - 60px);
    @media (max-width: 300px) {
      display: block;
      width: 100%;
    }
  }

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
      </ResumeHead>
      <ResumeContainer>
        {/* <Experiences experiences={resume.experiences}></Experiences> */}
        <h2 className="work-head">Work Experience</h2>
        {/* <p className="work-desc">
          My work experiences fall into three buckets - design, education, and
          entrepreneurship. <br />
          Each experience helped me gain distinct perspectives and skillsets.
        </p> */}
        <Fragment>
          <ScrollAnimation
            duration={0.7}
            offset={20}
            delay={0}
            animateIn="animate__fadeIn"
            animateOnce={true}
          >
            <h3>Design</h3>
            <Experience className="experience-container gcc-vaccine">
              <a
                className="container-link"
                rel="noreferrer"
                href="/resume/gccvac"
              >
                <div className="experience-image">
                  <img
                    src={require("../images/logos/gcc-vaccine.png")}
                    alt="gcc-vaccine-logo"
                  />
                </div>
                <div className="experience-content">
                  <h4>UI/UX Lead</h4>
                  <h5>
                    GCC Vaccination Portal
                    <span className="float-right">JUN 2021 - AUG 2021</span>
                  </h5>
                  <p>
                    Details
                    <span className="arrow">&#8594;</span>
                  </p>
                </div>
              </a>
            </Experience>
            <Experience className="experience-container election-promises">
              <a
                className="container-link"
                rel="noreferrer"
                href="/resume/election-promises"
              >
                <div className="experience-image">
                  <img
                    src={require("../images/logos/election-promises.png")}
                    alt="election-promises-logo"
                  />
                </div>
                <div className="experience-content">
                  <h4>Tech & Design Lead</h4>
                  <h5>
                    Election Promises
                    <span className="float-right">FEB 2021 - MAY 2021</span>
                  </h5>
                  <p>
                    Details
                    <span>&#8594;</span>
                  </p>
                </div>
              </a>
            </Experience>
            <Experience className="experience-container zoho">
              <a
                className="container-link"
                rel="noreferrer"
                href="/resume/zoho"
              >
                <div className="experience-image">
                  <img
                    src={require("../images/logos/zoho.png")}
                    alt="zoho-logo"
                  />
                </div>
                <div className="experience-content">
                  <h4>Visual Designer</h4>

                  <h5>
                    Zoho
                    <span className="float-right">JUN 2016 - JUL 2017</span>
                  </h5>
                  <p>
                    Details
                    <span>&#8594;</span>
                  </p>
                </div>
              </a>
            </Experience>
            <h3>Education</h3>
            <Experience className="experience-container ijmhss">
              <a
                className="container-link"
                rel="noreferrer"
                href="/resume/ijmhss"
              >
                <div className="experience-image">
                  <img
                    src={require("../images/logos/ijmhss.png")}
                    alt="ijmhss-logo"
                  />
                </div>
                <div className="experience-content">
                  <h4>School Administrator</h4>

                  <h5>
                    Infant Jesus MHSS
                    <span className="float-right">JUL 2018 - JUL 2022</span>
                  </h5>

                  <p>
                    Details
                    <span>&#8594;</span>
                  </p>
                </div>
              </a>
            </Experience>

            <Experience className="experience-container prayogshala">
              <a
                className="container-link"
                rel="noreferrer"
                href="/resume/project-prayogshala"
              >
                <div className="experience-image">
                  <img
                    src={require("../images/logos/prayogshala.png")}
                    alt="prayogshala-logo"
                  />
                </div>
                <div className="experience-content">
                  <h4>Super Maker & Co-Founder</h4>
                  <h5>
                    Project Prayogshala
                    <span className="float-right">APR 2019 - JUN 2022</span>
                  </h5>
                  <p>
                    Details
                    <span>&#8594;</span>
                  </p>
                </div>
              </a>
            </Experience>
            <Experience className="experience-container flourish">
              <a
                className="container-link"
                rel="noreferrer"
                href="/resume/flourish"
              >
                <div className="experience-image">
                  <img
                    src={require("../images/logos/flourish.png")}
                    alt="flourish-logo"
                  />
                </div>
                <div className="experience-content">
                  <h4>Project Lead</h4>
                  <h5>
                    Flourish
                    <span className="float-right">DEC 2019 - JUL 2022</span>
                  </h5>
                  <p>
                    Details
                    <span>&#8594;</span>
                  </p>
                </div>
              </a>
            </Experience>

            <h3>Entrepreneurship</h3>
            <Experience className="experience-container hi603">
              <a
                className="container-link"
                rel="noreferrer"
                href="/resume/hi603"
              >
                <div className="experience-image">
                  <img
                    src={require("../images/logos/hi603.png")}
                    alt="hi603-logo"
                  />
                </div>
                <div className="experience-content">
                  <h4>Founder</h4>
                  <h5>
                    hi603
                    <span className="float-right">SEPT 2021 - JUL 2022</span>
                  </h5>
                  <p>
                    Details
                    <span>&#8594;</span>
                  </p>
                </div>
              </a>
            </Experience>
          </ScrollAnimation>
        </Fragment>
        {/* <Ventures ventures={resume.ventures}></Ventures> */}
        <Education courses={resume.education}></Education>
        <Awards awards={resume.awards} numberOfItemsToShow={3}></Awards>
        <h2>Skills</h2>
        <Skills></Skills>
        <h2>Tools</h2>
        <Tools></Tools>
        {/* <Publications publications={resume.publications}></Publications> */}
        <Certifications certifications={resume.certifications}></Certifications>
        <Volunteering volunteering={resume.volunteering}></Volunteering>
        {/* <GetInTouch /> */}
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
