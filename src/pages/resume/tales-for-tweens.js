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
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { css } from "@emotion/core"
import { Fragment } from "react"
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
    width: 100%;
  }

  .solution-hero-img {
    border-radius: 20px;
    width: 90%;
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
    padding-top: 90px;
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

const talesfortweens = () => {
  return (
    <>
      <Helmet
        title="Tales For Tweens Case Study | Deepak Varuvel Dennison"
        titleTemplate="Tales For Tweens Case Study | Deepak Varuvel Dennison"
        meta={[
          {
            name: `description`,
            content: `Case study of the Tales For Tweens project!`,
          },
          {
            property: `og:title`,
            content: `Tales For Tweens Case Study | Deepak Varuvel Dennison`,
          },
          {
            property: `og:description`,
            content: `Check out the Tales For Tweens Case Study by Deepak!`,
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
            content: `Tales For Tweens Case Study | Deepak Varuvel Dennison`,
          },
          {
            name: `twitter:description`,
            content: `Check out the Tales For Tweens Case Study by Deepak!`,
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
            <CasestudyTitle>Tales For Tweens</CasestudyTitle>
            <CasestudyMeta>
              <p>A book for tomorrow's progressive citizens!</p>
            </CasestudyMeta>
          </CasestudyHeroText>

          <CasestudyHeroContainer>
            <img
              src={require("../../images/projects/tft/cover.png")}
              alt="Tales For Tweens cover"
            />
          </CasestudyHeroContainer>

          <CasestudyBody>
            <Summary className="centered">
              <h2>Project Summary</h2>
              <p>
                Tales for Tweens is{" "}
                <strong>
                  an inclusive and progressive storybook for young Indians
                </strong>{" "}
                . The book is a compilation of the finest stories spread across
                themes such as Body Positivity, Gender Identity, Saving Money,
                Climate Change, and Mental Health. The book is currently
                available for sales in Amazon India and several other
                independent bookstores. The book received positive reviews from
                various parents, experts, and also received wide media coverage
                for its unique approach.
              </p>
            </Summary>

            <CasestudyRole className="centered">
              <div className="container">
                <div className="role">
                  <h4>Role</h4>
                  <p>
                    I am the <strong>creator</strong> of the book that involved
                    designing the book and editing the individual stories.
                  </p>
                </div>
                <div className="break"></div>
                <div className="timeline">
                  <h4>Timeline</h4>
                  <p>January 2022 - Present</p>
                </div>
              </div>
              <div className="client">
                <h4>Client</h4>
                <p>Flourish Books</p>
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
                      <span className="label">Adobe InDesign</span>
                    </Tag>
                    <Tag
                      css={css`
                        background-color: ${colors.blue200};
                        color: ${colors.blue600};
                      `}
                    >
                      <span className="label">Adobe Photoshop</span>
                    </Tag>
                    <Tag
                      css={css`
                        background-color: ${colors.blue200};
                        color: ${colors.blue600};
                      `}
                    >
                      <span className="label">Adobe Illustrator</span>
                    </Tag>
                    <Tag
                      css={css`
                        background-color: ${colors.blue200};
                        color: ${colors.blue600};
                      `}
                    >
                      <span className="label">Grapedrop</span>
                    </Tag>
                  </Fragment>
                </TagsContainer>
              </div>
            </CasestudyRole>

            <Challenge className="centered">
              <div className="container">
                <h2>Challenge</h2>
                <p>
                  Even though a growing number of Indian parents are looking to
                  introduce their children to progressive ideas, there is a
                  dearth of affordable resources in the mainstream to facilitate
                  the process. The books that focused on topics such as LGBTQ+,
                  climate change, and mental health were relatively expensive
                  that made it unaffordable to most Indian parents. In addition,
                  there has also been a lack of stories around the
                  aforementioned concepts in the Indian context.
                  <div className="challenge-emphasis">
                    The challenge was to create an affordable and contextual
                    storybook for introducing Indian young adults to social
                    issues relevant to them.
                  </div>
                </p>
              </div>
            </Challenge>
            <Process className="centered">
              <section>
                <h2>Process</h2>
                {/* User Research Section*/}
                <h3 className="sub-sub-heading">Market Research</h3>
                <p>
                  The storybooks in the market were initially analyzed to
                  identify the following:
                  <ul>
                    <li>The themes of the books in the current market</li>
                    <li>Reviews of the books</li>
                    <li>Potential outreach channels</li>
                  </ul>
                  The initial market research led to several insights that
                  guided the subsequent parent interviews.
                </p>
              </section>
              {/* Insights Section*/}
              <section>
                <h3 className="sub-sub-heading">Parent Interviews</h3>
                <p>
                  Based on the market research, several parent personas were
                  identified and the books were decided to be focused on
                  urban/semi-urban parents who wanted to expose their children
                  to progressive ideas. The parent interviews helped in
                  identifying the themes that were lacking in the current market
                  but had a demand. Based on the parent interviews, market
                  research, and expert consultation, the following themes were
                  identified for the storybook.
                </p>
                <div className="grid-container">
                  <div className="box-1">
                    <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="body positivity"
                        icon="child"
                        className="title-icon"
                      />
                      <p>Body Positivity</p>
                    </div>
                  </div>
                  <div className="box-2">
                    <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="Gender identity"
                        icon="transgender-alt"
                        className="title-icon"
                      />
                      <p>Gender Identity</p>
                    </div>
                  </div>
                  <div className="box-3">
                    <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="financial literacy"
                        icon="rupee-sign"
                        className="title-icon"
                      />
                      <p>Financial Literacy</p>
                    </div>
                  </div>
                  <div className="box-1">
                    <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="climate change"
                        icon="globe-africa"
                        className="title-icon"
                      />
                      <p>Climate Change</p>
                    </div>
                  </div>
                  <div className="box-2">
                    <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="civic awareness"
                        icon="bullhorn"
                        className="title-icon"
                      />
                      <p>Civic Awareness</p>
                    </div>
                  </div>
                  <div className="box-3">
                    <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="mental health"
                        icon="brain"
                        className="title-icon"
                      />
                      <p>Mental Health</p>
                    </div>
                  </div>
                </div>
              </section>
              {/* User Personas Section*/}
              <section>
                <h3 className="sub-sub-heading">Leveraging Creative Commons</h3>
                <p>
                  For the book, I primarily relied on open-sourced stories
                  released under the Creative Commons license to ensure
                  significant cost cutting. The stories are handpicked from the
                  best stories in StoryWeaver, an open-source platform, under
                  the Creative Commons (CC) License. By leveraging the CC
                  License, the stories are further adapted and enhanced to be
                  inclusive and diverse with the aid of an inclusivity index.
                  More details on the book's inclusivity index can be found here
                  -{" "}
                  <a
                    href="https://talesfortweens.in/inclusivity-index"
                    target="_blank"
                    rel="noreferrer"
                  >
                    talesfortweens.in/inclusivity-index.
                  </a>
                </p>
                <img
                  src={require("../../images/projects/tft/cc.png")}
                  alt="part of inclusivity index"
                  className="full-width-img"
                />
              </section>
            </Process>
            <Solution className="centered">
              <h2>Solution</h2>
              <div className="solution-grid solution-hero-grid">
                <div className="box-1">
                  <p className="solution-hero-text">Tales For Tweens</p>
                  <p className="solution-main">
                    An inclusive and progressive storybook for young Indians.
                    The book is a compilation of the finest stories spread
                    across themes such as Body Positivity, Gender Identity,
                    Saving Money, Climate Change, and Mental Health.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/tft/mock0.png")}
                    alt="homescreen"
                    className="solutions-img solution-hero-img"
                  />
                </div>
              </div>
              <div className="solution-grid">
                <div className="box-1">
                  <p className="key-text">
                    LGBTQ+ friendly with inclusive language
                  </p>
                  <p className="sub-text">
                    The stories in the book were carefully adapted to be
                    inclusive of all genders, disabilities, and identities,
                    while taking special care to ensure the language used is
                    free of any biases. This effort to create an equitable and
                    welcoming narrative has made the stories even more
                    compelling and meaningful.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/tft/mock1.png")}
                    alt="pages from a story"
                    className="solutions-img"
                  />
                </div>
              </div>
              <div className="solution-grid reverse">
                <div className="box-1">
                  <img
                    src={require("../../images/projects/tft/mock2.png")}
                    alt="digital content in an iPad"
                    className="solutions-img"
                  />
                </div>
                <div className="box-2">
                  <p className="key-text">Complementary digital content</p>
                  <p className="sub-text">
                    The stories are enhanced with QR codes, granting readers
                    access to a wide range of digital content and further
                    information on the themes explored in the stories.
                  </p>
                </div>
              </div>
              <div className="solution-grid">
                <div className="box-1">
                  <p className="key-text">Contextual stories</p>
                  <p className="sub-text">
                    The stories are tailored to the Indian context to ensure
                    that young readers can relate to and engage with the
                    storylines.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/tft/mock3.png")}
                    alt="pages from a story"
                    className="solutions-img"
                  />
                </div>
              </div>
              <div className="solution-grid reverse">
                <div className="box-1">
                  <img
                    src={require("../../images/projects/tft/mock4.png")}
                    alt="pages from a story"
                    className="solutions-img"
                  />
                </div>
                <div className="box-2">
                  <p className="key-text">Engaging activities</p>
                  <p className="sub-text">
                    The stories in this book are filled with captivating
                    activities to ensure that readers remain engaged and
                    entertained throughout.
                  </p>
                </div>
              </div>
            </Solution>
            <Results className="centered">
              <div className="container">
                <h2>Results</h2>
                <p>
                  The book was piloted in the market with 1000 copies. Despite
                  minimal marketing spending, it has seen notable traction due
                  to positive word-of-mouth. It has been especially
                  well-received by progressive parents in India, and its success
                  has been covered by several newspapers and online media
                  channels such as{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.thehindu.com/life-and-style/chennai-book-tales-for-tweens-has-inclusive-childrens-stories-on-lgbtq-and-climate-change/article65548556.ece"
                  >
                    The Hindu
                  </a>{" "}
                  and{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.newindianexpress.com/lifestyle/books/2022/jun/11/tales-for-tweens-a-collection-of-open-source-stories-targets-taboo-throughpositive-tales-2464113.html"
                  >
                    The New Indian Express
                  </a>
                  . The book has been consistently in the top 10 percentile in
                  the Childrens & Young Adults section in Amazon India. The
                  initial feedback received from the launch of the first edition
                  has been essential in helping to guide the development of
                  subsequent editions.
                </p>
                <img
                  src={require("../../images/projects/tft/results.png")}
                  alt="testimonials and media coverage"
                  className="full-width-img"
                />
              </div>
              <h3 className="sub-sub-heading learnings">Learnings</h3>
              <p>
                The project resulted in several important learnings that I
                always look back upon.
              </p>
              <h4 className="learning-subtitle">
                Importance of product market fit
              </h4>
              <p>
                I started the storybooks project through bilingual storybooks.
                Despite the effectiveness of the book, the book couldn't find
                the right customers. It taught me the importance of creating a
                product that's not just effective but can also sell in the
                market. With Tales For Tweens, the marketing efforts were
                primarily focussed on reaching the urban progressive parents
                with spending power. This strategy proved particularly effective
                as the parents in the said category are keen on purchasing
                progressive storybooks for their chidren.
              </p>
              <h4 className="learning-subtitle">Power of word of mouth</h4>
              <p>
                Apart from the initial influencer marketing, the sales of the
                book has been sustained primarily through the word of mouth
                marketing. It is important to create mechanisms that allow
                people to easily share and talk about the product.
              </p>
              <h4 className="learning-subtitle">
                Understanding of Indian E-Commerce supply chains
              </h4>
              <p>
                The experience helped gain a good understanding of being a
                seller in the Indian e-commerce ecosystem. The biggest takeaway
                is that the Indian e-commerce system is so stellar that by
                establishing good systems and processes one can leverage
                third-party services to sell online with minimum hassle.
              </p>
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
              thirdNavigationTitle: "Park of Joy",
              thirdNavigationImg: "poj/cover.png",
              thirdNavigationLink: "/resume/park-of-joy",
            }}
          ></CasestudyNavigationBlock>
        </ScrollAnimation>
      </FullLayout>
    </>
  )
}

export default talesfortweens
