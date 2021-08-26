import React from 'react';
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { Link, graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";
import Button from "components/_ui/Button";
import Layout from "components/Layout";
import typefaces from '../styles/typefaces';
import { Fragment } from 'react';

const ProjectHeroContainer = styled("div")`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    // padding-top: 2.25em;
    margin-bottom: 3.5em;
    max-height: 400px;

    img {
        // max-width: 600px;
        width: 100%;
    }
`
const ProjectHeroText = styled("div")`
text-align: center;
`

const ProjectTitle = styled("h1") `
    max-width: 550px;
    margin: 0 auto;
`

const ProjectBody = styled("div")`
    max-width: 700px;
    margin: 0 auto;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;
        text-align: center;

        img {
            width: auto;
            max-height: 400px;
        }
    }

    ul li {
        font-family: ${typefaces.sansSerif};
        font-weight: 300;
        padding: 5px 0px;
        // color: red;
    }

    iframe {
        width: 100%;
        min-height: 400px;
    }
`

const WorkLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
    p{
        margin: 5px 0px;
        line-height: 1;
        font-size: 0.9em;
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
        bottom: 2px; 
    }
    p
    {
        font-weight: 400;
        line-height: 1.6em;
        margin: 0px;
    }
`

const ProjectLink = styled("p")`
    margin: 0px 0px 40px 0px;
    font-family: ${typefaces.serif};
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
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: `${project.project_title[0].text}`,
                    },
                    {
                        property: `og:description`,
                        content: meta.description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
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
                        content: meta.title,
                    },
                    {
                        name: `twitter:description`,
                        content: meta.description,
                    },
                ].concat(meta)}
            />
            <Layout>
                <ProjectHeroText>
                    <ProjectTitle>
                        {RichText.asText(project.project_title)}
                    </ProjectTitle>
                    <ProjectMeta><p>{RichText.asText(project.project_designation)}</p> <span>&#9679;</span> <p>{RichText.asText(project.project_type)}</p> <span>&#9679;</span> <p>{RichText.asText(project.project_timeframe)}</p> </ProjectMeta>
                    <ProjectLink><a href={project.project_website.url} target="_blank" rel="noreferrer" ><span role="img" aria-label="website">&#x1F310; </span>{url_domain(project.project_website.url)}</a></ProjectLink>
                </ProjectHeroText>
                {project.project_hero_image && (
                    <ProjectHeroContainer>
                        <img src={project.project_hero_image.url} alt="bees" />
                    </ProjectHeroContainer>
                )}
                <ProjectBody>
                    {RichText.render(project.project_description)}
                    {project.project_responsibilities && (
                        <Fragment>
                        <h4>Responsibilities</h4>
                        {RichText.render(project.project_responsibilities)}
                        </Fragment>
                    )}
                    {project.project_accomplishments && (
                        <Fragment>
                        <h4>Accomplishments</h4>
                        {RichText.render(project.project_accomplishments)}
                        </Fragment>
                    )}  
                    {project.project_learnings && (
                        <Fragment>
                        <h4>Learnings</h4>
                        {RichText.render(project.project_learnings)}
                        </Fragment>
                    )}                    
                    <WorkLink to={`/work/${nextProject._meta.uid}`}>
                        <Button className="Button--secondary">
                            See Next Work
                            <p>{RichText.asText(nextProject.project_title)}</p>
                        </Button>
                    </WorkLink>

                </ProjectBody>
            </Layout>
        </>
    )
}

export default ({ data }) => {
    const project = data.project.allProjects.edges[0];
    const projectContent = project.node;
    const projectId = projectContent._meta.uid;
    const nextProjectContents = data.nextProject.allProjects.edges;
    const projectIndex = nextProjectContents.findIndex(x => x.node._meta.uid === projectId);
    const nextProjectIndex = (projectIndex + 1) % nextProjectContents.length;
    const nextProjectContent = nextProjectContents[nextProjectIndex].node;
    const meta = data.siteData.siteMetadata;
    return (
        <Project project={projectContent} nextProject={nextProjectContent} meta={meta} />
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

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

const url_domain = (data) => {
    var a = document.createElement('a');
    a.href = data;
    return (a.hostname);
  }