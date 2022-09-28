import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import WeblinkCard from "../components/WeblinkCard";
import HeroText from "../components/_ui/HeroText"
import Button from "../components/_ui/Button"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import deeps from "images/deep.png"
import deeps_glass from "images/deep-glass.png"
import og_img from "images/og-img.jpg"
import lbr from "images/lbr.png"
import lbr_gif from "images/lbr.gif"
import typefaces from "../styles/typefaces"

const Hero = styled("div")`

  animation: fadeIn linear 0.5s;
  -webkit-animation: fadeIn linear 0.5s;
  -moz-animation: fadeIn linear 0.5s;
  -o-animation: fadeIn linear 0.5s;
  -ms-animation: fadeIn linear 0.5s;
  

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 4em;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(230px, max-content));

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  p {
    font-family: ${typefaces.serif};
    font-size: 2.2em;
    margin-bottom: 1em;  
    line-height: 1.45;
    font-weight: 800;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.8em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1.5em;
    }

    span {
      transition: all 100ms ease-in-out;
      display: inline-block;
      &:nth-of-type(1) span {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) span {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) span {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) span {
        color: ${colors.green500};
      }
      &:nth-of-type(5) span {
        color: ${colors.teal500};
      }

      &:hover {
        transition: all 100ms ease-in-out;
        &:nth-of-type(1) span {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) span {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) span {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) span {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) span {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const HeroContent = styled("div")`
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
  @media (max-width: 950px) {
    grid-row: 2;
  }
  width: auto;
  
  .animated {
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 0.1em;
  }
`

const HeroImage = styled("div")`
  max-width: 300px;
  transition: transform 0.2s;
  &:hover {
    transform: rotate(3deg);
  }
`

const Deeps = styled("img")`
  width: 100%;
  height: 100%;
`

const Deeps_Dummy = styled("img")`
  width: 0%;
  height: 0%;
`

const ProfileAnimations = styled("div")`
  position: relative;
  bottom: 66px;
  .lbr {
    position: absolute;
    right: -8px;
    width: 320px;
  }
`

const Section = styled("div")`
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Gist = styled("div")`
animation: fadeIn linear 0.5s;
-webkit-animation: fadeIn linear 0.5s;
-moz-animation: fadeIn linear 0.5s;
-o-animation: fadeIn linear 0.5s;
-ms-animation: fadeIn linear 0.5s;


@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-moz-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-o-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-ms-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

.gist-content{
  line-height: 2em;

  b{
    font-weight: 400;
  }
}

#gist-tooltip{
  text-align: left;
  line-height: 20px;
  font-size: 14px;
  
  ul{
    margin: 0px 0px 10px 0px;
    padding: 0px 20px;
  }
  li {
    padding: 0px 0px 5px 0px;
  }
}
p {
  text-align: center;
  padding 0px 20px;
  font-size: 1.05em;
  margin-bottom: 1em;  

  font-weight: 300;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 1.1em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 1.05em;
    padding 0px;
  }

  span {
    font-weight: 400;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.1em;
    transition: all 100ms ease-in-out;
    display: inline-block;
    &:nth-of-type(1) span {
      color: ${colors.blue500};
    }
    &:nth-of-type(2) span {
      color: ${colors.orange500};
    }
    &:nth-of-type(3) span {
      color: ${colors.purple500};
    }
    &:nth-of-type(4) span {
      color: ${colors.green500};
    }
    &:nth-of-type(5) span {
      color: ${colors.teal500};
    }

    &:hover {
      transition: all 100ms ease-in-out;
      &:nth-of-type(1) span {
        color: ${colors.blue600};
        background-color: ${colors.blue200};
      }
      &:nth-of-type(2) span {
        color: ${colors.orange600};
        background-color: ${colors.orange200};
      }
      &:nth-of-type(3) span {
        color: ${colors.purple600};
        background-color: ${colors.purple200};
      }
      &:nth-of-type(4) span {
        color: ${colors.green600};
        background-color: ${colors.green200};
      }
      &:nth-of-type(5) span {
        color: ${colors.teal600};
        background-color: ${colors.teal200};
      }
    }
  }
`

const WebLinksSection = styled("div")`
  /**
   * User input values.
   */
  --grid-layout-gap: 25px;
  --grid-column-count: 3;
  --grid-item--min-width: 100px;

  @media (max-width: 950px) {
    --grid-column-count: 2;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    --grid-column-count: 1;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    --grid-column-count: 1;
  }

  /**
   * Calculated values.
   */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
  margin-bottom: 20px;
`

const WorkAction = styled(Link)`
  display: inline-block;
  text-align: center;
  margin: 10px auto;
`

const WorkHeading = styled("h3")`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 1.3em;
  }
`

const WeblinksHeading = styled("h3")`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 0px;
`

const WeblinksDescription = styled("p")`
  text-align: center;
  margin: 10px auto;
  margin-bottom: 50px;
  max-width: 600px;
`

const ResumeHeading = styled("h3")`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 0px;
`

const ResumeDescription = styled("p")`
  text-align: center;
  margin: 10px auto;
  margin-bottom: 10px;
`

function RenderBody({ projects, meta, weblinks }) {
  const [deePicture, setDeepicture] = useState(deeps)
  const [lbrPicture, setLbr] = useState(lbr)
  function defaultPictures() {
    setDeepicture(deeps)
    setLbr(lbr)
  }
  function hoverPictures() {
    setDeepicture(deeps_glass)
    setLbr(lbr_gif)
  }
  const [showComponent, displayState] = useState(false)

  useEffect(() => {
    displayState(true)
  },[]);

  return (
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
            name: `theme-color`,
            content: colors.blue600,
          },
          {
            property: `og:title`,
            content: `Home | ${meta.title}`,
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
            content: meta.title,
          },
          {
            name: `twitter:description`,
            content: meta.description,
          },
        ].concat(meta)}
      />

      <Hero style={{visibility: showComponent ? 'visible' : 'hidden' }}>
        <HeroContent>
          <p>
            I'm{" "}
            <HeroText
              tooltipId="hero"
              tooltipText="Actually my full name is <strong>Deepak Varuvel Dennison</strong>😁"
            >
              <ScrollAnimation
                initiallyVisible={true}
                delay={1500}
                animateIn="animate__headShake"
              >
                Deepak
              </ScrollAnimation>
            </HeroText>{""}
            , a generalist who loves to{" "}
            <HeroText
              tooltipId="hero"
              tooltipText="I enjoy reading and learning by doing. In fact, this website is a result of the attempt to learn React.js🎓."
            >
              <ScrollAnimation
                initiallyVisible={true}
                delay={1500}
                animateIn="animate__headShake"
              >
                {" "}
                learn
              </ScrollAnimation>
            </HeroText>{" "}
            and{" "}
            <HeroText
              tooltipId="hero"
              tooltipText="🛠️From creating playground with tires to publishing books, I enjoy building versatile and useful stuff for people. You can find few notable things I’ve built in this website."
            >
              <ScrollAnimation
                initiallyVisible={true}
                delay={1500}
                animateIn="animate__headShake"
              >
                build
              </ScrollAnimation>
            </HeroText>{" "}
            meaningful solutions for people. I get very excited about all things
            education, design, and technology.
          </p>
        </HeroContent>
        <HeroImage onMouseOver={hoverPictures} onMouseOut={defaultPictures}>
          <Deeps src={deePicture}></Deeps>
          <Deeps_Dummy src={deeps_glass}></Deeps_Dummy>
          <ProfileAnimations>
            <img className="lbr" src={lbrPicture} alt="" />
          </ProfileAnimations>
        </HeroImage>
      </Hero>
      <Section>
        <Gist style={{visibility: showComponent ? 'visible' : 'hidden' }}>
        <WorkHeading>The North Star</WorkHeading>
          <p className="gist-content">
            Over the past six years, fortunately I have had an opportunity to work on <HeroText tooltipId="gist-tooltip"
            tooltipText="<ul>
            <li>Managed a school's operations</li>
            <li>Created low-cost makerspaces</li>
            <li>Designed a vaccine booking system</li>
            <li>Developed a platform to compare election promises</li>
            <li>Published children's books</li>
            <li>Designed UI for a IT-service software</li>
            <li>Built a local online marketplace</li>
            </ul> More details in the <b>Work</b> page :)">diverse projects</HeroText>{""}. Right from starting my career as a Visual Designer to recently building a profitable local online marketplace from scratch, <b>designing meaningful and useful solutions for people</b> has served as <b><i>the North Star</i></b> in guiding my work. My credo is to keep learning and continue using my <HeroText tooltipId="gist-tooltip"
            tooltipText="Elaborated on my skills in the <b>Resume</b> page🤓">diverse skillsets</HeroText>{""} across <b>design</b>, <b>tech</b>, and <b>project management</b> to create meaningful products and solutions for people to make our world a little better everyday.
          </p>
        </Gist>
      </Section>
      <Section>
        <WorkHeading>Check out my work below :)</WorkHeading>
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
      </Section>
      <Section>
      <WeblinksHeading>Around The Web</WeblinksHeading>
      <WeblinksDescription>
         Here are some links that are linked to me in some way - media features of my works, my writings, or small fun things that I created 
          <span role="img" aria-label="down-emoji">
            ⏬
          </span>
          !
        </WeblinksDescription>
        <WebLinksSection>
              {weblinks.map((weblink, i) => (
                <WeblinkCard
                  key={i}
                  category={weblink.node.linkType}
                  title={weblink.node.linkTitle}
                  description={weblink.node.linkDescription}
                  websiteName={weblink.node.websiteName}
                  websiteLink={weblink.node.websiteLink}
                  thumbnail={weblink.node.photo}
                  type={weblink.node.linkType}
                  timeframe={weblink.node.date}
                  link={weblink.node.linkurl}
                />
              ))}
          </WebLinksSection>
          <WorkAction to={"/aroundtheweb"}>
              <Button className="Button--secondary">More in the web</Button>
            </WorkAction>
      </Section>
      <Section>
      <ResumeHeading>What else?</ResumeHeading>
      <ResumeDescription>
         Interested in knowing more about my education, skills, and accomplishments?
          <span role="img" aria-label="nerd-things-emoji">
          🤓
          </span>
        </ResumeDescription>
        <WorkAction to={"/resume"}>
          <Button>Check out my resume</Button>
        </WorkAction>
      </Section>

    </>
  )
}

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const projects = data.prismic.allProjects.edges
  const tempWeblinks = data.prismic.allWeblinkss.edges
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  const weblinksShuffled = shuffle(tempWeblinks);
  const weblinks = weblinksShuffled.slice(0,3);

  const meta = data.site.siteMetadata

  if (!doc || !projects || !weblinks) return null

  return (
    <Layout>
      <RenderBody home={doc.node} projects={projects} weblinks={weblinks} meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  weblinks: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

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
      allProjects(sortBy: project_post_date_DESC, first: 4) {
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
      allWeblinkss(where: {featureThisLink: true}) {
        edges {
          node {
            linkTitle
            linkDescription
            websiteName
            websiteLink
            photo
            date
            linkType
            featureThisLink
            _linkType
            linkurl {
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
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
