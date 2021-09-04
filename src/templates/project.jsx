import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "styles/colors"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Button from "components/_ui/Button"
import Layout from "components/Layout"
import typefaces from "../styles/typefaces"
import { Fragment } from "react"
import parseUrl from "parse-url"
import dimensions from "styles/dimensions"
import ScrollAnimation from "react-animate-on-scroll"

const ProjectHeroContainer = styled("div")`
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  // padding-top: 2.25em;
  margin-bottom: 3.5em;
  max-height: 450px;
  margin-top: -20px;

  img {
    // max-width: 600px;
    width: 100%;
  }
`
const ProjectHeroText = styled("div")`
  text-align: center;
`

const ProjectTitle = styled("h1")`
  max-width: 550px;
  margin: 0 auto;
`

const ProjectBody = styled("div")`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  p,
  h4 {
    text-align: left;
  }

  p {
    margin: 10px 0px 0px 0px;
  }

  h4 {
    font-size: 1.2em;
    margin: 40px 0px 0px 0px;
  }

  strong {
    font-weight: 500;
  }

  .block-img {
    text-align: center;
    width: calc(50% - 10px);
    // width: 100%;
    margin: 5px;
    display: inline-flex;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 100%;
    }

    img {
      // height: 236px;
      width: 100%;
      // max-width: 400px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
      @media (max-width: ${dimensions.maxwidthTablet}px) {
        // height: 236px;
      }
      @media (max-width: ${dimensions.maxwidthMobile}px) {
      }
    }
  }

  ul li {
    margin-left: -15px;
    text-align: left;
    font-family: ${typefaces.sansSerif};
    font-weight: 300;
    padding: 5px 0px;
    // color: red;
  }

  iframe {
    margin-top: 20px;
    width: 100%;
    min-height: 394px;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      min-height: 196px;
    }
  }
  .twitter-tweet {
    margin: auto;
  }
`

const WorkLink = styled(Link)`
  margin-top: 3em;
  display: inline-block;
  text-align: center;
  p {
    text-align: center;
    margin: 5px 15px 0px 15px;
    line-height: 1;
    font-size: 0.9em;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      margin: 5px 15px 0px 15px;
    }
  }
`
const ProjectMeta = styled("div")`
  width: 100%;
  font-family: ${typefaces.sansSerif};
  margin: 0px 0px 5px 0px;
  font-size: 0.9em;
  color: ${colors.grey700};
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  span {
    margin: 0px 10px;
    color: ${colors.grey500};
    position: relative;
    bottom: 1px;
    font-size: 14px;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      bottom: 0px;
      font-size: 8px;
    }
  }
  p {
    font-weight: 400;
    line-height: 1.6em;
    margin: 0px;
  }
`

const ProjectLink = styled("p")`
  margin: 0px 0px 40px 0px;
  font-family: ${typefaces.serif};
  a {
    padding: 12px 16px;
    display: inline-block;
    margin-top: -20px;
  }
`

const ResponsibilitiesContainer = styled("div")`
  position: relative;
  margin: 60px 0px;
  &:before {
    position: absolute;
    z-index: -100;
    content: "";
    left: -20px;
    top: -25px;
    padding: 25px 20px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: ${colors.teal100};
  }
  * {
    box-sizing: border-box;

    &::selection {
      background: ${colors.teal500};
      color: white;
    }
  }
`

const AccomplishmentsContainer = styled("div")`
  position: relative;
  margin: 60px 0px;
  &:before {
    position: absolute;
    z-index: -100;
    content: "";
    left: -20px;
    top: -25px;
    padding: 25px 20px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: ${colors.purple100};
  }
  * {
    box-sizing: border-box;

    &::selection {
      background: ${colors.purple800};
      color: white;
    }
  }
`

const LearningsContainer = styled("div")`
  position: relative;
  margin: 60px 0px;
  &:before {
    position: absolute;
    z-index: -100;
    content: "";
    left: -20px;
    top: -25px;
    padding: 25px 20px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: ${colors.orange100};
  }
  * {
    box-sizing: border-box;

    &::selection {
      background: ${colors.orange500};
      color: white;
    }
  }
`

const Project = ({ project, nextProject, meta }) => {
  return (
    <>
      <Helmet
        title={`${project.project_title[0].text}`}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
          {
            name: `description`,
            content: `Check out Deepak's engagement with ${project.project_title[0].text}!`,
          },
          {
            property: `og:title`,
            content: `${project.project_title[0].text} | ${meta.title}`,
          },
          {
            property: `og:description`,
            content: `Check out Deepak's engagement with ${project.project_title[0].text}!`,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: project.project_hero_image.url,
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
            content: `${project.project_title[0].text} | ${meta.title}`,
          },
          {
            name: `twitter:description`,
            content: `Check out Deepak's engagement with ${project.project_title[0].text}!`,
          },
        ].concat(meta)}
      />
      <Layout>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          <ProjectHeroText>
            <ProjectTitle>
              {RichText.asText(project.project_title)}
            </ProjectTitle>
            <ProjectMeta>
              <p>{RichText.asText(project.project_designation)}</p>{" "}
              <span>&#9679;</span>{" "}
              <p>{RichText.asText(project.project_type)}</p>{" "}
              <span>&#9679;</span>{" "}
              <p>{RichText.asText(project.project_timeframe)}</p>{" "}
            </ProjectMeta>
            <ProjectLink>
              <a
                href={project.project_website.url}
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="website">
                  &#x1F310;{" "}
                </span>
                {parseUrl(project.project_website.url).resource}
              </a>
            </ProjectLink>
          </ProjectHeroText>
          {project.project_hero_image && (
            <ProjectHeroContainer>
              <img src={project.project_hero_image.url} alt="bees" />
            </ProjectHeroContainer>
          )}
          <ProjectBody>
            {RichText.render(project.project_description)}
            {project.project_responsibilities && (
              <ResponsibilitiesContainer>
                <h4>
                  Responsibilities{" "}
                  <span role="img" aria-label="nerd-face">
                    🤓
                  </span>
                </h4>
                {RichText.render(project.project_responsibilities)}
              </ResponsibilitiesContainer>
            )}
            {project.project_accomplishments && (
              <AccomplishmentsContainer>
                <h4 aria-label="accomplishment">
                  Accomplishments{" "}
                  <span role="img" aria-label="party-popper">
                    🎉
                  </span>{" "}
                </h4>
                {RichText.render(project.project_accomplishments)}
              </AccomplishmentsContainer>
            )}
            {project.project_learnings && (
              <LearningsContainer>
                <h4>
                  Learnings{" "}
                  <span role="img" aria-label="bulb">
                    💡
                  </span>
                </h4>
                {RichText.render(project.project_learnings)}
              </LearningsContainer>
            )}
            {project.additional_comment && (
              <Fragment>{RichText.render(project.additional_comment)}</Fragment>
            )}
            <WorkLink to={`/work/${nextProject._meta.uid}`}>
              <Button className="Button--secondary">
                See Next Work
                <p>{RichText.asText(nextProject.project_title)}</p>
              </Button>
            </WorkLink>
          </ProjectBody>
        </ScrollAnimation>
      </Layout>
    </>
  )
}

export default ({ data }) => {
  const project = data.project.allProjects.edges[0]
  const projectContent = project.node
  const projectId = projectContent._meta.uid
  const nextProjectContents = data.nextProject.allProjects.edges
  const projectIndex = nextProjectContents.findIndex(
    x => x.node._meta.uid === projectId
  )
  const nextProjectIndex = (projectIndex + 1) % nextProjectContents.length
  const nextProjectContent = nextProjectContents[nextProjectIndex].node
  const meta = data.siteData.siteMetadata
  return (
    <Project
      project={projectContent}
      nextProject={nextProjectContent}
      meta={meta}
    />
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export const query = graphql`
  query ProjectQuery($uid: String) {
    project: prismic {
      allProjects(uid: $uid) {
        edges {
          cursor
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_designation
            project_post_date
            project_hero_image
            project_description
            project_responsibilities
            project_accomplishments
            project_learnings
            project_timeframe
            project_type
            additional_comment
            project_website {
              _linkType
              ... on PRISMIC__ExternalLink {
                target
                _linkType
                url
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
    nextProject: prismic {
      allProjects(sortBy: project_post_date_DESC) {
        edges {
          cursor
          node {
            project_title
            _meta {
              uid
            }
          }
        }
      }
    }
    siteData: site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
