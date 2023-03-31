import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
// import ProjectCard from "components/ProjectCard"
import WeblinkCard from "../components/WeblinkCard"
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
import { css } from "@emotion/core"
import MouseScrollAnimation from "../components/MouseScrollAnimation"

const Hero = styled("div")`
  animation: fadeIn linear 0.5s;
  -webkit-animation: fadeIn linear 0.5s;
  -moz-animation: fadeIn linear 0.5s;
  -o-animation: fadeIn linear 0.5s;
  -ms-animation: fadeIn linear 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  padding-top: 8%;
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

  .sub-text {
    font-family: ${typefaces.sansSerif};
    font-weight: 200;
    font-size: 1.3em;
  }

  .sub-text span {
    color: ${colors.orange500};
    &:hover {
      transition: all 100ms ease-in-out;
      color: ${colors.orange600};
      background-color: ${colors.orange200};
    }
  }

    p {
      font-family: ${typefaces.serif};
      font-size: 2.2em;
      margin-bottom: 1em;
      line-height: 1.45;
      font-weight: 600;

      @media (max-width: ${dimensions.maxwidthTablet}px) {
        font-size: 1.8em;
      }

      @media (max-width: ${dimensions.maxwidthMobile}px) {
        font-size: 1.5em;
      }

      span {
        transition: all 100ms ease-in-out;
        display: inline-block;
        color: ${colors.blue500};

        &:hover {
          transition: all 100ms ease-in-out;
          color: ${colors.blue600};
          background-color: ${colors.blue200};
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

const AnimationContainer = styled("div")`
  height: 250px;
  .scroll-animation-block {
    display: inline-block;
    margin: auto;
    top: 30%;
    left: 50%;
    position: relative;
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

const Journey = styled("div")`
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

  b {
    font-weight: 500;
  }
  .journey-intro {
    font-size: 1em;
    line-height: 2.6em;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1em;
      line-height: 2em;
    }
  }

  .role-desc {
    margin: 40px 0px;
    font-family: ${typefaces.serif};
    font-weight: 500;
    font-size: 1.45em;
    line-height: 1.3em;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1.3em;
      line-height: 1.3em;
    }
  }

  .journey-grid {
    /**
   * User input values.
   */
    --grid-layout-gap: 25px;
    --grid-item--min-width: 100px;

    @media (max-width: 950px) {
      --grid-layout-gap: 10px;
      grid-template-columns: 100%;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      --grid-layout-gap: 10px;
      grid-template-columns: 100%;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      --grid-layout-gap: 10px;
      grid-template-columns: 100%;
    }

    align-items: center;
    display: grid;
    grid-gap: var(--grid-layout-gap);
  }

  .journey-top {
    grid-template-columns: 65% 35%;
  }

  .journey-bottom {
    margin-top: 20px;
    grid-template-columns: 40% 60%;
  }

  .journey-top,
  .journey-bottom {
    @media (max-width: 950px) {
      grid-template-columns: 100%;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      grid-template-columns: 100%;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-template-columns: 100%;
    }
  }

  .reverse .box-2 {
    @media (max-width: 950px) {
      order: 1;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      order: 1;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      order: 1;
    }
  }

  .reverse .box-1 {
    @media (max-width: 950px) {
      order: 2;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      order: 2;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      order: 2;
    }
  }

  .journey-img-1 {
    width: 90%;
    max-width: 300px;
    margin: auto;
    display: block;
  }
  .journey-img-2 {
    width: 80%;
    margin: auto;
    display: block;
    max-width: 300px;
  }

  .check-resume {
    text-align: center;
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
  --grid-item--max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-count)
  );

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  grid-gap: var(--grid-layout-gap);
  margin-bottom: 20px;
`

const WorkAction = styled(Link)`
  display: block;
  text-align: center;
  margin: 10px 0px;
`

const WorkHeading = styled("h3")`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 30px;
`

const WeblinksHeading = styled("h3")`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 40px;
`

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
      padding: 2em 1em 2.25em 1em;
  }

`

const CasestudyCardTitle = styled("h3")`
  margin-bottom: 1.2em;
  margin-top: 0.2em;
`

const CasestudyCardBlurb = styled("div")`
  margin-top: 0.5em;
  margin-bottom: 50px;
  font-size: 0.9em;
  color: ${colors.grey800};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 5px;
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
      .poj-img{
        width: 600px;
        bottom: 40px;
        top: 0%;
        position: relative;
        @media (max-width: 950px) {
        // right: 50%;
        }
      
        @media (max-width: ${dimensions.maxwidthTablet}px) {
            left: 5%;
            top: -8%;
        }
      
          @media (max-width: ${dimensions.maxwidthMobile}px) {
          display: block;
          left: -30%;
        }
        }
        .tft-img{
          width: 700px;
          bottom: 40px;
          top: -15%;
          position: relative;
          @media (max-width: 950px) {
          left: -7%;
          }
        
          @media (max-width: ${dimensions.maxwidthTablet}px) {
              left: -7%;
              top: -20%;
          }
        
            @media (max-width: ${dimensions.maxwidthMobile}px) {
            display: block;
            left: -30%;
          }
          }
`

const ShowMoreButton = styled("button")`
  background-color: ${colors.grey100};
  border: none;
  color: ${colors.grey700};
  border-radius: 4px;
  border: 2px solid;
  padding: 8px 30px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin: auto;
  margin-bottom: 60px;
  cursor: pointer;
  transition: background 100ms ease-in-out;
  // box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);
  &:hover {
    color: white;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
    border: 2px solid ${colors.pink600};
    background-color: ${colors.pink600};
    cursor: pointer;
    transition: background 100ms ease-in-out;
  }
`

const Tag = styled("div")`
  margin: 0px 0px 5px 0px;
  padding: 2px 10px;
  border-radius: 6px;
  width: fit-content;
  .label {
    font-weight: 800;
    position: relative;
    top: -1px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-family: ${typefaces.sansSerif};
  }
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
  }, [])

  // Weblinks Show More
  const [showButton, setButtonDisplay] = useState(true)
  const [itemsToShow, setPostsToShow] = useState([])
  const postsPerPage = 3
  let arrayForHoldingPosts = []
  const ref = useRef(postsPerPage)
  const loopWithSlice = (start, end) => {
    const slicedPosts = weblinks.slice(0, end)
    arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
    console.log(arrayForHoldingPosts)
    setPostsToShow(arrayForHoldingPosts)
  }
  useEffect(() => {
    loopWithSlice(0, postsPerPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const showMoreItems = () => {
    loopWithSlice(ref.current, ref.current + postsPerPage)
    ref.current += postsPerPage
    if (weblinks.length === arrayForHoldingPosts.length) {
      setButtonDisplay(false)
    }
  }

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

      <Hero style={{ visibility: showComponent ? "visible" : "hidden" }}>
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
            </HeroText>
            {""}, a designer studying at Stanford University.{" "}
          </p>
          <p className="sub-text">
            I enjoy{" "}
            <HeroText
              tooltipId="hero"
              tooltipText="🛠️From creating playground with tires to publishing books, I enjoy building versatile and useful stuff for people. You can find few notable things I’ve built in this website."
            >
              <ScrollAnimation
                initiallyVisible={true}
                delay={1500}
                animateIn="animate__headShake"
              >
                building
              </ScrollAnimation>
            </HeroText>{" "}
            meaningful and useful solutions for people.
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
      <AnimationContainer>
        <div className="scroll-animation-block">
          <MouseScrollAnimation></MouseScrollAnimation>
        </div>
      </AnimationContainer>

      <Section>
        <>
          <ScrollAnimation
            duration={0.7}
            offset={20}
            delay={0}
            animateIn="animate__fadeIn"
            animateOnce={true}
          >
            <CasestudyCardContainer to={`/resume/gccvac`}>
              <CasestudyCardContent className="CasestudyCardContent">
                <Tag
                  css={css`
                    background-color: ${colors.purple100};
                    color: ${colors.purple500};
                  `}
                >
                  <span className="label">UI/UX Design</span>
                </Tag>
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
            <CasestudyCardContainer to={`/resume/election-promises`}>
              <CasestudyCardContent className="CasestudyCardContent">
                <Tag
                  css={css`
                    background-color: ${colors.purple100};
                    color: ${colors.purple500};
                  `}
                >
                  <span className="label">UI/UX Design</span>
                </Tag>
                <CasestudyCardTitle>Election Promises</CasestudyCardTitle>
                <CasestudyCardBlurb>
                  <p>Helping citizens make an informed voting decision!</p>
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
            <CasestudyCardContainer to={`/resume/park-of-joy`}>
              <CasestudyCardContent className="CasestudyCardContent">
                <Tag
                  css={css`
                    background-color: ${colors.orange100};
                    color: ${colors.orange500};
                  `}
                >
                  <span className="label">Participatory Design</span>
                </Tag>
                <CasestudyCardTitle>Park of Joy</CasestudyCardTitle>
                <CasestudyCardBlurb>
                  <p>A cost-effective upcycled playground for children!</p>
                </CasestudyCardBlurb>
                <CasestudyCardAction className="CasestudyCardAction">
                  View Case Study <span>&#8594;</span>
                </CasestudyCardAction>
              </CasestudyCardContent>
              <CasestudyCardImageContainer className="CasestudyCardImageContainer">
                <img
                  src={require("../images/projects/poj/thumb.png")}
                  alt="Park of Joy"
                  className="poj-img"
                />
              </CasestudyCardImageContainer>
            </CasestudyCardContainer>
            <CasestudyCardContainer to={`/resume/tales-for-tweens`}>
              <CasestudyCardContent className="CasestudyCardContent">
                <Tag
                  css={css`
                    background-color: ${colors.teal100};
                    color: ${colors.teal500};
                  `}
                >
                  <span className="label">Book Design</span>
                </Tag>
                <CasestudyCardTitle>Tales For Tweens</CasestudyCardTitle>
                <CasestudyCardBlurb>
                  <p>A book for tomorrow's progressive citizen</p>
                </CasestudyCardBlurb>
                <CasestudyCardAction className="CasestudyCardAction">
                  View Case Study <span>&#8594;</span>
                </CasestudyCardAction>
              </CasestudyCardContent>
              <CasestudyCardImageContainer className="CasestudyCardImageContainer">
                <img
                  src={require("../images/projects/tft/thumb.png")}
                  alt="Tales For Tweens"
                  className="tft-img"
                />
              </CasestudyCardImageContainer>
            </CasestudyCardContainer>
          </ScrollAnimation>
        </>
      </Section>

      <Section>
        <Journey>
          <WorkHeading>A Variety Of Experiences</WorkHeading>
          <p className="journey-intro">
            As <b>a designer with a bias towards action</b>, I am driven to{" "}
            <b>solve problems that have an impact on people</b>, enabling me to
            gain a variety of experiences. Over the past six years, I have...{" "}
          </p>
          <div className="journey-grid journey-top">
            <div className="box-1">
              <a
                className="heading-link"
                target="_blank"
                rel="noreferrer"
                href="/resume/zoho"
              >
                <p className="role-desc">
                  worked for a multinational software company
                  <span>&#8594;</span>
                </p>
              </a>
              <a
                className="heading-link"
                target="_blank"
                rel="noreferrer"
                href="/resume/ijmhss"
              >
                <p className="role-desc">
                  managed a rural school's operations
                  <span>&#8594;</span>
                </p>
              </a>
              <a
                className="heading-link"
                target="_blank"
                rel="noreferrer"
                href="/resume/project-prayogshala"
              >
                <p className="role-desc">
                  created low-cost makerspaces
                  <span>&#8594;</span>
                </p>
              </a>
              <a
                className="heading-link"
                target="_blank"
                rel="noreferrer"
                href="/resume/flourish"
              >
                <p className="role-desc">
                  published bilingual children's storybooks
                  <span>&#8594;</span>
                </p>
              </a>
              <a
                className="heading-link"
                target="_blank"
                rel="noreferrer"
                href="/resume/hi603"
              >
                <p className="role-desc">
                  founded a profitable online marketplace and sold it
                  <span>&#8594;</span>
                </p>
              </a>
            </div>
            <div className="box-2">
              <img
                src={require("../images/logo-stickers-2.png")}
                alt="journey icons"
                className="journey-img-1"
              />
            </div>
          </div>
          <div className="journey-grid journey-bottom reverse">
            <div className="box-1">
              <img
                src={require("../images/dee.png")}
                alt="design, education, and entreprenuership"
                className="journey-img-2"
              />
            </div>
            <div className="box-2">
              <p className="journey-intro">
                My experiences so far lie in the areas of design, education, and
                entrepreneurship. These experiences has allowed me to{" "}
                <b>
                  cultivate diverse perspectives and skills that have greatly
                  contributed to my competence as a designer
                </b>
                . My passion for <b>creating useful solutions</b> for people has
                been my{" "}
                <b>
                  <i>North Star</i>
                </b>
                , and I continue to further develop my skills and pursue this
                journey.
              </p>
            </div>
          </div>
          <p className="journey-intro check-resume">
            Check out my resume for more details about my career so far!
          </p>
          <WorkAction to={"/resume"}>
            <Button>View Resume</Button>
          </WorkAction>
        </Journey>
      </Section>
      <Section>
        <WeblinksHeading>Media Features</WeblinksHeading>
        <WebLinksSection>
          {itemsToShow.map((weblink, i) => (
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
        {showButton && (
          <ShowMoreButton onClick={showMoreItems}>View more</ShowMoreButton>
        )}
      </Section>
    </>
  )
}

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const projects = data.prismic.allProjects.edges
  const tempWeblinks = data.prismic.allWeblinkss.edges
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)
  const weblinksShuffled = shuffle(tempWeblinks)
  const weblinks = weblinksShuffled

  const meta = data.site.siteMetadata

  if (!doc || !projects || !weblinks) return null

  return (
    <Layout>
      <RenderBody
        home={doc.node}
        projects={projects}
        weblinks={weblinks}
        meta={meta}
      />
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
      allWeblinkss {
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
