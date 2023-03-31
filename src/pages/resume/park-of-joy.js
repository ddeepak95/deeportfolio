import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "styles/colors"
import FullLayout from "components/FullLayout"
import typefaces from "../../styles/typefaces"
import dimensions from "styles/dimensions"
import ScrollAnimation from "react-animate-on-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { css } from "@emotion/core"
import { Fragment } from "react"
import ReactBeforeSliderComponent from "react-before-after-slider-component"
import "react-before-after-slider-component/dist/build.css"
import CasestudyNavigationBlock from "../../components/CasestudyNavigation"

library.add(fab, fas, far)

const CasestudyHeroContainer = styled("div")`
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  // padding-top: 2.25em;
  margin-bottom: 3.5em;
  // max-height: 450px;
  margin-top: 40px;
  margin: auto;
  max-width: ${dimensions.maxwidthDesktop}px;

  img {
    // max-width: 600px;
    width: 100%;
  }
`
const CasestudyHeroText = styled("div")`
  text-align: center;
  margin-top: 40px;
  padding: 0px 20px 0px 20px;
`

const CasestudyTitle = styled("h1")`
  max-width: 800px;
  margin: 0 auto;
`

const CasestudyBody = styled("div")`
  .centered {
    padding: 0% 18%;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      padding-left: ${dimensions.paddingHorizontalTablet}em;
      padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding-left: ${dimensions.paddingHorizontalMobile}em;
      padding-right: ${dimensions.paddingHorizontalMobile}em;
    }
  }

  margin: 0 auto;
  text-align: center;
  p,
  h2,
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

  .sub-heading {
    margin: 20px 0px 10px 0px;
  }

  .sub-sub-heading {
    font-family: ${typefaces.sansSerif};
    color: ${colors.grey800};
    text-align: left;
    font-weight: 400;
  }

  strong {
    font-weight: 500;
  }

  .block-img {
    text-align: center;
    // width: calc(50% - 10px);
    width: 100%;
    // margin: 5px;
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
  .challenge-emphasis {
    margin-top: 30px;
    font-size: 1.3em;
    // text-align: center;
    font-weight: 400;
    font-family: ${typefaces.serif};
  }
`

const Challenge = styled("div")`
  padding-top: 100px !important;
  color: ${colors.grey100};
  padding-bottom: 100px !important;
  background: ${colors.purple800};
  .full-width-img {
    margin-top: 20px;
    width: 100%;
  }
`
const Process = styled("div")`
  padding-top: 80px !important;

  .full-width-img {
    width: 100%;
  }

  .grid-container {
    /**
     * User input values.
     */
    --grid-layout-gap: 25px;
    --grid-column-count: 3;
    --grid-item--min-width: 100px;

    @media (max-width: 950px) {
      --grid-column-count: 3;
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
    margin-bottom: 50px;
    margin-top: 20px;
    color: ${colors.purple700};
  }

  section {
    margin-bottom: 60px;
  }

  ul {
    margin: 0px;
  }

  .grid-container .box-1,
  .grid-container .box-2,
  .grid-container .box-3 {
    // border: 2px solid ${colors.orange600};
    background-color: ${colors.purple100};
    border-radius: 10px;
    padding: 20px 20px;
    font-size: 0.9em;
  }

  .box-title {
    display: block;
    text-align: center;
  }

  .box-title p {
    display: block;
    text-align: center;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    font-size: 18px;
    font-family: ${typefaces.sansSerif};
    font-weight: 400;
    // letter-spacing: 2px;
    // text-transform: uppercase;
  }

  .box-title .title-icon {
    font-size: 3em;
    // margin: 0px 0px -4px 7px;
  }

  .persona-container {
    display: flex;
    margin-bottom: 10px;
    margin-top: 20px;
    color: ${colors.blue800};
    border: 2px solid ${colors.grey400};
    border-radius: 20px;
    padding: 10px 10px 5px 10px;
    background-color: ${colors.grey100};

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      justify-content: center;
      flex-wrap: wrap;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      justify-content: center;
      flex-wrap: wrap;
    }

    p {
      @media (max-width: ${dimensions.maxwidthTablet}px) {
        text-align: center;
        margin: auto;
      }

      @media (max-width: ${dimensions.maxwidthMobile}px) {
        text-align: center;
        margin: auto;
      }
    }

    .persona-image-container img {
      display: inline-block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-right: 20px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      @media (max-width: ${dimensions.maxwidthTablet}px) {
        text-align: center;
        margin: auto;
      }

      @media (max-width: ${dimensions.maxwidthMobile}px) {
        text-align: center;
        margin: auto;
      }
    }
  }

  .person-name {
    font-size: 1.1em;
    font-weight: 400;
    white-space: nowrap;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      display: block;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      display: block;
    }
  }
  .separator {
    margin: 0px 12px;
    font-weight: 800;
    color: ${colors.grey500};
  }
  .persona-data-unit {
    font-weight: 400;
  }
  .label {
    margin-right: 7px;
    font-weight: 300;
    color: ${colors.grey800};
  }

  .persona-desc {
    margin-top: 0px;
  }

  .person-details {
    margin-top: 2px;
  }

  .first-separator {
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      display: none;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      display: none;
    }
  }
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 16px solid #817c7c;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 16px solid #817c7c;
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: rgb(195 195 195);
  }
  .carousel .carousel-status {
    font-size: 16px;
  }
`

const Solution = styled("div")`
  padding-top: 50px !important;

  .solution-grid {
    margin: 80px 0px;
    /**
 * User input values.
 */
    --grid-layout-gap: 25px;
    --grid-column-count: 2;
    --grid-item--min-width: 100px;

    @media (max-width: 950px) {
      --grid-column-count: 1;
      --grid-layout-gap: 10px;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      --grid-column-count: 1;
      --grid-layout-gap: 10px;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      --grid-column-count: 1;
      --grid-layout-gap: 10px;
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

  .solution-grid .box-1,
  .solution-grid .box-2 {
    font-size: 0.9em;
  }

  .solutions-img {
    width: 60%;
  }

  .solution-hero-img {
    border-radius: 20px;
    width: 100%;
  }

  .solution-hero-grid {
    background: ${colors.purple100};
    width: 110%;
    margin-left: -5%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 40px;
    margin-bottom: 50px;
    margin-top: 20px;
  }

  .solution-hero-text {
    font-family: ${typefaces.sansSerif};
    color: ${colors.purple700};
    text-align: left;
    font-weight: 800;
    font-size: 1.6em;
    padding-top: 60px;
    @media (max-width: 950px) {
      padding-top: 0px;
    }
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      padding-top: 0px;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding-top: 0px;
    }
  }

  .solution-grid .key-text {
    padding-top: 80px;
    font-family: ${typefaces.serif};
    font-size: 1.6em;
    line-height: 1.4em;
    text-transform: capitalize;
    font-weight: 600;
    color: ${colors.grey800};
    @media (max-width: 950px) {
      padding-top: 10px;
    }
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      padding-top: 10px;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding-top: 10px;
    }
  }
`

const Results = styled("div")`
  padding-top: 50px !important;
  padding-bottom: 50px !important;

  .full-width-img {
    width: 100%;
  }

  .results-grid {
    /**
   * User input values.
   */
    --grid-layout-gap: 25px;
    --grid-column-count: 4;
    --grid-item--min-width: 100px;

    @media (max-width: 950px) {
      --grid-column-count: 2;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      --grid-column-count: 2;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      --grid-column-count: 2;
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
    margin-bottom: 50px;
    margin-top: 20px;
  }

  .results-grid > * {
    border: 2px solid ${colors.grey400};
    border-radius: 10px;
    padding: 10px;
    font-size: 0.9em;
  }

  .results-grid .key-text {
    padding-top: 0px;
    margin: 0px;
    font-family: ${typefaces.serif};
    font-size: 2em;
    text-transform: capitalize;
    font-weight: 600;
  }

  .info-icon {
    color: ${colors.orange500};
    top: 1px;
    position: relative;
  }

  .sub-sub-heading.learnings {
    margin-top: 80px;
  }

  .learning-subtitle {
    font-size: 1em;
    margin-top: 20px;
  }
`

const CasestudyRole = styled("div")`
  margin-bottom: 100px;
  .container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .container > div {
    /*demo purposes */
    // height: 30px;
  }

  h4 {
    margin-top: 30px;
    font-size: 14px;
    font-family: ${typefaces.sansSerif};
    margin-bottom: -10px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .role {
    flex: 0 60%;
    padding-right: 20px;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      flex-basis: 100%;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      flex-basis: 100%;
    }
  }

  .timeline {
    flex: 0 40%;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      flex-basis: 100%;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      flex-basis: 100%;
    }
  }
`

const Summary = styled("div")`
  margin-top: 100px;
`

const CasestudyMeta = styled("div")`
  width: 100%;
  font-family: ${typefaces.sansSerif};
  margin: 0px 0px 40px 0px;
  font-size: 1.2em;
  color: ${colors.grey700};
  //   letter-spacing: 2px;
  //   text-transform: uppercase;
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
    font-weight: 200;
    line-height: 1.6em;
    margin: 0px;
  }
`

const TagsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  overflow-scroll: hidden;
  margin: 20px 0px 10px 0px;
`

const Tag = styled("div")`
  margin: 0px 10px 10px 0px;
  .label {
    padding: 5px 15px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-family: ${typefaces.sansSerif};
  }

  .tooltip {
    margin-top: -15px !important;
  }
`

const FIRST_IMAGE = {
  imageUrl: "https://i.ibb.co/C9VchMj/before.png",
}
const SECOND_IMAGE = {
  imageUrl: "https://i.ibb.co/mJHvpcD/after.png",
}

const parkofjoy = () => {
  return (
    <>
      <Helmet
        title="Park of Joy Case Study | Deepak Varuvel Dennison"
        titleTemplate="Park of Joy Case Study | Deepak Varuvel Dennison"
        meta={[
          {
            name: `description`,
            content: `Case study of the Park of Joy project!`,
          },
          {
            property: `og:title`,
            content: `Park of Joy Case Study | Deepak Varuvel Dennison`,
          },
          {
            property: `og:description`,
            content: `Check out the Park of Joy Case Study by Deepak!`,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            // content: {require("../../images/projects/gcc/cover.png")},
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: `Deepak Varuvel Dennison`,
          },
          {
            name: `twitter:title`,
            content: `Park of Joy Case Study | Deepak Varuvel Dennison`,
          },
          {
            name: `twitter:description`,
            content: `Check out the Park of Joy Case Study by Deepak!`,
          },
        ]}
      />
      <FullLayout>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          <CasestudyHeroText>
            <CasestudyTitle>Park of Joy</CasestudyTitle>
            <CasestudyMeta>
              <p>A cost-effective upcycled playground for children!</p>
            </CasestudyMeta>
          </CasestudyHeroText>

          <CasestudyHeroContainer>
            <img
              src={require("../../images/projects/poj/cover.png")}
              alt="Park of Joy Wide View"
            />
          </CasestudyHeroContainer>

          <CasestudyBody>
            <Summary className="centered">
              <h2>Project Summary</h2>
              <p>
                Park of Joy is{" "}
                <strong>
                  a playground built using recycled tires and scrap for children
                  in a rural school
                </strong>{" "}
                in Tamil Nadu. The entire project was completed in{" "}
                <strong>less than $350</strong> by leveraging local community
                resources and mobilizing volunteers. The project was implemented
                on the tenets of Participatory Design where the stakeholders
                where involved in every phase of the design process. The
                community members of the school especially the children played a
                significant role in choosing the playground designs, collecting
                the necessary material, even during the construction. Currently,
                the park is being used by more than 150 children every day.
              </p>
            </Summary>

            <CasestudyRole className="centered">
              <div className="container">
                <div className="role">
                  <h4>Role</h4>
                  <p>
                    I served as the{" "}
                    <strong>Designer and the Project Manager</strong> for
                    building the playground from scratch.
                  </p>
                </div>
                <div className="break"></div>
                <div className="timeline">
                  <h4>Timeline</h4>
                  <p>Jan 2019 - Mar 2019</p>
                </div>
              </div>
              <div className="client">
                <h4>Client</h4>
                <p>Infant Jesus MHSS, Kalpakkam</p>
              </div>
              <div className="Tools">
                <h4>Tools</h4>
                <TagsContainer>
                  <Fragment>
                    <Tag
                      css={css`
                        background-color: ${colors.blue200};
                        color: ${colors.blue600};
                      `}
                    >
                      <span className="label">SketchUp</span>
                    </Tag>
                    <Tag
                      css={css`
                        background-color: ${colors.blue200};
                        color: ${colors.blue600};
                      `}
                    >
                      <span className="label">PlaygroundIdeas.org</span>
                    </Tag>
                  </Fragment>
                </TagsContainer>
              </div>
            </CasestudyRole>

            <Challenge className="centered">
              <div className="container">
                <h2>Challenge</h2>
                <p>
                  While play is an integral part of the childhood that
                  facilitates multifaceted development in children, the school
                  lacked safe playing spaces for children to explore active and
                  creative play. The school is attended by around 500 rural
                  children from ages 4 to 10. Given the low-income nature of the
                  community, the school lacked the resources to construct a
                  full-fledged playground.
                  <img
                    src={require("../../images/projects/poj/before.png")}
                    alt="Empty land"
                    className="full-width-img"
                  />
                  <div className="challenge-emphasis">
                    The challenge was to develop a large and safe playing space
                    for children in a cost-effective way.
                  </div>
                </p>
              </div>
            </Challenge>
            <Process className="centered">
              <section>
                <h2>Process</h2>
                {/* User Research Section*/}
                <h3 className="sub-sub-heading">Exploratory Research</h3>
                <p>
                  The process started with with an open exploratory research and
                  stakeholder interviews to learn about the various possible
                  solutions for constructing a playground. Through the research,
                  it was identified that while the community lacked the
                  financial resources to contract a third-party to construct a
                  playground, it was rich with social capital. The explorations
                  proceeded with a goal to leverage the resources within the
                  community itself to construct the playground.
                  <br />
                  <br />
                  Based on the exploration, the following strengths were
                  identified:
                  <div className="grid-container">
                    <div className="box-1">
                      <div className="box-title">
                        <FontAwesomeIcon
                          aria-label="community"
                          icon="users"
                          className="title-icon"
                        />
                        <p>Strong community support</p>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="box-title">
                        <FontAwesomeIcon
                          aria-label="resources"
                          icon="book-open"
                          className="title-icon"
                        />
                        <p>Open knowledge resources</p>
                      </div>
                    </div>
                    <div className="box-3">
                      <div className="box-title">
                        <FontAwesomeIcon
                          aria-label="tires"
                          icon="cogs"
                          className="title-icon"
                        />
                        <p>Easy access to tires & scrap</p>
                      </div>
                    </div>
                  </div>
                </p>
              </section>
              {/* Insights Section*/}
              <section>
                <h3 className="sub-sub-heading">Participatory Design</h3>
                <p>
                  The members of the school community was involved in the design
                  process right from the inception of the project to ensure
                  collective ownership throughout the process. The designs for
                  the play equipment were designed in consultation with the
                  students, teachers, and based on the availability of the
                  resources. The students and the parents were then actively
                  engaged in collecting the resources such as tires for the
                  project. Majority of the resources were contributed by the
                  community members itself as donations.
                </p>
                <Carousel
                  autoPlay
                  interval="2500"
                  transitionTime="500"
                  infiniteLoop
                  showThumbs={false}
                  showIndicators={false}
                  emulateTouch={true}
                >
                  <div>
                    <img
                      src={require("../../images/projects/poj/par1.png")}
                      alt="Playground Plan"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/par2.png")}
                      alt="Tires collected by students"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/par3.png")}
                      alt="Students playing with tires"
                    />
                  </div>
                </Carousel>
              </section>
              {/* User Personas Section*/}
              <section>
                <h3 className="sub-sub-heading">Community-driven Creation</h3>
                <p>
                  The members of the school community was involved in the design
                  process right from the inception of the project to ensure
                  collective ownership throughout the process. The designs for
                  the play equipment were designed in consultation with the
                  students, teachers, and based on the availability of the
                  resources. The students and the parents were then actively
                  engaged in collecting the resources such as tires for the
                  project. Majority of the resources were contributed by the
                  community members itself as donations.
                </p>
                <Carousel
                  autoPlay
                  interval="2500"
                  transitionTime="500"
                  infiniteLoop
                  showThumbs={false}
                  showIndicators={false}
                  emulateTouch={true}
                >
                  <div>
                    <img
                      src={require("../../images/projects/poj/cd1.png")}
                      alt="Volunteers, students, and a teacher painting together!"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/cd2.png")}
                      alt="Students painting together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/cd3.png")}
                      alt="Volunteer introducing himself"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/cd4.png")}
                      alt="Students painting together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/cd5.png")}
                      alt="Group after a workshop"
                    />
                  </div>
                </Carousel>
              </section>
            </Process>
            <Solution className="centered">
              <h2>Solution</h2>
              <div className="solution-grid solution-hero-grid">
                <div className="box-1">
                  <p className="solution-hero-text">Park of Joy</p>
                  <p className="solution-main">
                    The efforts of the community resulted in the Park of Joy.
                    Currently, the park is being used by more than 150 children
                    every day.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/poj/hero-solution.png")}
                    alt="homescreen"
                    className="solutions-img solution-hero-img"
                  />
                </div>
              </div>
              <div className="solution-grid">
                <div className="box-1">
                  <p className="key-text">
                    By the Community. For the Community.
                  </p>
                  <p className="sub-text">
                    The park is now entirely maintained by the community.
                    Students enhanced the park further by planting trees and
                    growing a garden.
                  </p>
                </div>
                <div className="box-2">
                  <Carousel
                    autoPlay
                    interval="2500"
                    transitionTime="500"
                    infiniteLoop
                    showThumbs={false}
                    showIndicators={false}
                    emulateTouch={true}
                  >
                    <div>
                      <img
                        src={require("../../images/projects/poj/comm1.png")}
                        alt="Students with plants"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/comm2.png")}
                        alt="Community planting together"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/comm3.png")}
                        alt="Students watering a plant"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className="solution-grid reverse">
                <div className="box-1">
                  <Carousel
                    autoPlay
                    interval="2500"
                    transitionTime="500"
                    infiniteLoop
                    showThumbs={false}
                    showIndicators={false}
                    emulateTouch={true}
                  >
                    <div>
                      <img
                        src={require("../../images/projects/poj/wall1.png")}
                        alt="Chain of Cheers Wall Art"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/wall2.png")}
                        alt="Pots of Love Wall Art"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/wall3.png")}
                        alt="Ocean of Kindness Wall Art"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/wall4.png")}
                        alt="Wall of Us Art"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/wall5.png")}
                        alt="Trunk of Togetherness Wall Art"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/wall6.png")}
                        alt="Park of Joy Wall Art"
                      />
                    </div>
                  </Carousel>
                </div>
                <div className="box-2">
                  <p className="key-text">Cheerful Wall Arts.</p>
                  <p className="sub-text">
                    Most of the artworks painted on the wall were conceptualized
                    by the students and the volunteers together on the spot.{" "}
                  </p>
                </div>
              </div>
              <div className="solution-grid">
                <div className="box-1">
                  <p className="key-text">Embedded Learning.</p>
                  <p className="sub-text">
                    The park is also incorporated with simple educational
                    concepts to signify the importance of learning even through
                    the process of play.
                  </p>
                </div>
                <div className="box-2">
                  <Carousel
                    autoPlay
                    interval="2500"
                    transitionTime="500"
                    infiniteLoop
                    showThumbs={false}
                    showIndicators={false}
                    emulateTouch={true}
                  >
                    <div>
                      <img
                        src={require("../../images/projects/poj/learn1.png")}
                        alt="Colors and heights"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/learn2.png")}
                        alt="Days"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/learn3.png")}
                        alt="Tamil Letters"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/learn4.png")}
                        alt="Math Clock"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/learn5.png")}
                        alt="Counting"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/learn6.png")}
                        alt="Phases of Moon"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className="solution-grid reverse">
                <div className="box-1">
                  <Carousel
                    autoPlay
                    interval="2500"
                    transitionTime="500"
                    infiniteLoop
                    showThumbs={false}
                    showIndicators={false}
                    emulateTouch={true}
                  >
                    <div>
                      <img
                        src={require("../../images/projects/poj/play1.png")}
                        alt="The Tire Climber"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/play2.png")}
                        alt="Tha Wah Car"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/play3.png")}
                        alt="Multipurpose Court"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/play4.png")}
                        alt="Caterpillar"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/play5.png")}
                        alt="Climber"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/play6.png")}
                        alt="The Hopper"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/play7.png")}
                        alt="Bikes"
                      />
                    </div>
                    <div>
                      <img
                        src={require("../../images/projects/poj/play8.png")}
                        alt="The Pyramid"
                      />
                    </div>
                  </Carousel>
                </div>
                <div className="box-2">
                  <p className="key-text">Fun Play Structures.</p>
                  <p className="sub-text">
                    All the play structures were designed to facilitate open and
                    exploratory play. Children keep creating their own games
                    around the play structures all the time.
                  </p>
                </div>
              </div>
            </Solution>
            <Results className="centered">
              <div className="container">
                <h2>Results</h2>
                <p>
                  The park is now used by over 150 children everyday for safe
                  and engaging play. The project also got covered in
                  SportsDev.org.
                </p>
                <h4>Before & After (Drag the slider to see the difference)</h4>
                <ReactBeforeSliderComponent
                  firstImage={FIRST_IMAGE}
                  secondImage={SECOND_IMAGE}
                />
                <h4>Play in progress</h4>
                <Carousel
                  autoPlay
                  interval="2500"
                  transitionTime="500"
                  infiniteLoop
                  showThumbs={false}
                  showIndicators={false}
                  emulateTouch={true}
                >
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu1.png")}
                      alt="Students playing together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu2.png")}
                      alt="Students playing together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu3.png")}
                      alt="Students playing together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu4.png")}
                      alt="Students playing together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu5.png")}
                      alt="Students playing together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu6.png")}
                      alt="Students playing together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu7.png")}
                      alt="Students playing together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu8.png")}
                      alt="Students playing together"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/poj/stu9.png")}
                      alt="Students playing together"
                    />
                  </div>
                </Carousel>
              </div>
              <h3 className="sub-sub-heading learnings">Learnings</h3>
              <p>
                The project resulted in several important learnings that I
                always look back upon.
              </p>
              <h4 className="learning-subtitle">Power of Communities</h4>
              <p>
                Communities can be extremely powerful. Leveraging the power of
                the community can result in phenomenal results especially in
                financially under-resourced settings.
              </p>
              <h4 className="learning-subtitle">Importance of Team Morale</h4>
              <p>
                Apart from two volunteers, none of us had never engaged in a
                large-scale painting project. Despite the uncertainties, nobody
                ever got demotivated because the team morale was always high.
                Sharing few words of timely appreciation to the team members can
                do magic to their morale.
              </p>
              <h4 className="learning-subtitle">Knowledge is distributed</h4>
              <p>
                The most important learning from this project is that knowledge
                is distributed and the whole is always greater than the sum of
                its parts. Making the whole process participatory made design
                approach more robust by bringing very unique ideas to the table
                from different members in the community.
              </p>
              <img
                src={require("../../images/projects/poj/community.jpg")}
                alt="Volunteers group"
                className="full-width-img"
              />
            </Results>
          </CasestudyBody>
          <CasestudyNavigationBlock
            navigations={{
              firstNavigationTitle: "GCC Vaccination Portal",
              firstNavigationImg: "gcc/cover.png",
              firstNavigationLink: "/resume/gccvac",
              secondNavigationTitle: "Election Promises",
              secondNavigationImg: "ep/cover.png",
              secondNavigationLink: "/resume/election-promises",
              thirdNavigationTitle: "Tales For Tweens",
              thirdNavigationImg: "tft/cover.png",
              thirdNavigationLink: "/resume/tales-for-tweens",
            }}
          ></CasestudyNavigationBlock>
        </ScrollAnimation>
      </FullLayout>
    </>
  )
}

export default parkofjoy
