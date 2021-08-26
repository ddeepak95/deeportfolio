import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import Button from "../components/_ui/Button"

const WorkTitle = styled("h1")`
    margin-bottom: 1em;
`
const WorkAfter = styled("div")`
text-align: center;
`

const WorkAction = styled(Link)`
margin-bottom: 10px;
`

const Work = ({ projects, meta }) => (
    <>
        <Helmet
            title="Work"
            titleTemplate={`%s | ${meta.title}`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Work | Prist, Gatsby & Prismic Starter`,
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
            <WorkTitle>
                Work
            </WorkTitle>
            <>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        category={project.node.project_designation}
                        title={project.node.project_title}
                        description={project.node.project_preview_description}
                        thumbnail={project.node.project_preview_thumbnail}
                        uid={project.node._meta.uid}
                        type={project.node.project_type}
                        timeframe={project.node.project_timeframe}
                    />
                ))}
            </>
            <WorkAfter>
            <WorkAction to={"/everything-else"}>
                <Button>See things other than work</Button>
            </WorkAction>
            </WorkAfter>
        </Layout>
    </>
);

export default ({ data }) => {
    const projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;
    if (!projects) return null;

    return (
        <Work projects={projects} meta={meta}/>
    )
}

Work.propTypes = {
    projects: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allProjects(sortBy: project_post_date_DESC) {
                edges {
                  node {
                    _linkType
                    project_designation
                    project_post_date
                    project_preview_description
                    project_preview_thumbnail
                    project_timeframe
                    project_title
                    project_type
                    _meta {
                        uid
                      }
                  }
                }
              
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`

