import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import HeroText from "../components/_ui/HeroText";
import Button from "../components/_ui/Button"


const Hero = styled("div")`
    padding-top: 2.5em;
    padding-bottom: 3em;
    margin-bottom: 4em;
    max-width: 830px;

    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        font-size: 2.6em;
        margin-bottom: 1em;

        span {
            text-decoration: none;
            transition: all 100ms ease-in-out;

            &:nth-of-type(1) { color: ${colors.blue500}; }
            &:nth-of-type(2) { color: ${colors.orange500}; }
            &:nth-of-type(3) { color: ${colors.purple500}; }
            &:nth-of-type(4) { color: ${colors.green500}; }
            &:nth-of-type(5) { color: ${colors.teal500}; }

            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;

                &:nth-of-type(1) { color: ${colors.blue600};    background-color: ${colors.blue200};}
                &:nth-of-type(2) { color: ${colors.orange600};  background-color: ${colors.orange200};}
                &:nth-of-type(3) { color: ${colors.purple600};  background-color: ${colors.purple200};}
                &:nth-of-type(4) { color: ${colors.green600};   background-color: ${colors.green200};}
                &:nth-of-type(5) { color: ${colors.teal600};    background-color: ${colors.teal200};}

            }
        }
    }
`

const Section = styled("div")`
    margin-bottom: 4em;
    display: flex;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 4em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const WorkAction = styled(Link)`
text-align: center;
margin-bottom: 10px;
`

const WorkHeading = styled("h3")`
text-align: center;
margin-bottom: 40px;
`

const RenderBody = ({ projects, meta }) => (
    <>
        <Helmet
            title="Home"
            titleTemplate={`%s | ${meta.title}`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
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
        <Hero>
            <h1>
                I'm <HeroText tooltipId="hero" tooltipText="Actually my fullname is <strong>Deepak Varuvel Dennison</strong>. Kinda long yet cool, right?😁">Deepak</HeroText>, a simple person who loves to <HeroText tooltipId="hero" tooltipText="I like to read as well as learn by doing. Infact, this website itself is a result of the attempt to learn React. 🎓"> learn</HeroText> and <HeroText tooltipId="hero" tooltipText="🛠️I love to build stuff. This website is mostly about that.">build things</HeroText> esp. in the social impact space. I get very excited about all things education, design, and technology.
            </h1>
        </Hero>
        <Section>
            <WorkHeading>Check out my works below :)</WorkHeading>
            {projects.map((project, i) => (
                <ProjectCard
                    key={i}
                    category={project.node.project_designation}
                    title={project.node.project_title}
                    description={project.node.project_preview_description}
                    thumbnail={project.node.project_preview_thumbnail}
                    type={project.node.project_type}
                    timeframe={project.node.project_timeframe}
                    uid={project.node._meta.uid}
                />
            ))}
            <WorkAction to={"/work"}>
                <Button className="Button--secondary">See more work</Button>
            </WorkAction>
            <WorkAction to={"/everything-else"}>
                <Button>See everything else</Button>
            </WorkAction>
        </Section>
        {/* <Section>
            <About
                bio={home.about_bio}
                socialLinks={home.about_links}
            />
        </Section> */}
    </>
);

export default ({ data }) => {
    //Required check for no data being returned
    const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const projects = data.prismic.allProjects.edges;
    const meta = data.site.siteMetadata;

    if (!doc || !projects) return null;

    return (
        <Layout>
            <RenderBody home={doc.node} projects={projects} meta={meta}/>
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allProjects(sortBy: project_post_date_DESC, first: 5) {
                edges {
                  node {
                    _linkType
                    project_designation
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