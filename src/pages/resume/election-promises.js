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
import HeroText from "../../components/_ui/HeroText"
import { Carousel } from "react-responsive-carousel"
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
  background: ${colors.teal600};
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
    --grid-column-count: 1;
    --grid-item--min-width: 100px;

    @media (max-width: 950px) {
      --grid-column-count: 1;
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
    color: ${colors.blue800};
  }

  section {
    margin-bottom: 60px;
  }

  ul {
    margin: 0px;
  }

  .grid-container .box-1,
  .grid-container .box-2 {
    border: 2px solid ${colors.blue600};
    border-radius: 10px;
    padding: 10px;
    font-size: 0.9em;
  }

  .box-title {
    display: block;
    text-align: left;
  }

  .box-title h4 {
    display: inline-block;
    margin: 0px 0px 0px 5px;
    font-size: 14px;
    font-family: ${typefaces.sansSerif};
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .box-title .title-icon {
    font-size: 1.7em;
    margin: 0px 0px -4px 7px;
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

.reverse .box-2{
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

.reverse .box-1{
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
  // border: 2px solid ${colors.blue600};
  // border-radius: 10px;
  // padding: 10px;
  font-size: 0.9em;
}

.solutions-img{
  width: 60%;
}

.solution-hero-img{
  border-radius: 20px;
  width: 100%;
}

.solution-hero-grid
{
  background: ${colors.orange100};  
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

.solution-hero-text{
  font-family: ${typefaces.sansSerif};
  color: ${colors.orange600};
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

.solution-grid .key-text{
  padding-top: 140px;
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

const Testing = styled("div")`
  padding-top: 50px !important;
  padding-bottom: 50px !important;
  background-color: ${colors.blue100};
`

const Results = styled("div")`
  padding-top: 50px !important;
  padding-bottom: 50px !important;
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

const electionpromises = () => {
  return (
    <>
      <Helmet
        title="Election Promises UX Case Study | Deepak Varuvel Dennison"
        titleTemplate="Election Promises UX Case Study | Deepak Varuvel Dennison"
        meta={[
          {
            name: `description`,
            content: `Case study of the Election Promises project!`,
          },
          {
            property: `og:title`,
            content: `Election Promises UX Case Study | Deepak Varuvel Dennison`,
          },
          {
            property: `og:description`,
            content: `Check out the Election Promises UX Case Study by Deepak!`,
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
            content: `Election Promises UX Case Study | Deepak Varuvel Dennison`,
          },
          {
            name: `twitter:description`,
            content: `Check out the Election Promises UX Case Study by Deepak!`,
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
            <CasestudyTitle>Election Promises</CasestudyTitle>
            <CasestudyMeta>
              <p>A platform to help citizens make informed voting decision.</p>
            </CasestudyMeta>
          </CasestudyHeroText>

          <CasestudyHeroContainer>
            <img
              src={require("../../images/projects/ep/cover.png")}
              alt="Election Promises Portal Screens"
            />
          </CasestudyHeroContainer>

          <CasestudyBody>
            <Summary className="centered">
              <h2>Project Summary</h2>
              <p>
                ElectionPromises.in is{" "}
                <strong>
                  a platform to help citizens make an informed voting decision
                  in the 2021 Tamil Nadu Legislative Elections
                </strong>
                . Through the platform, the citizens could compare the promises
                of contesting parties from their election manifestos and details
                of candidates contesting in their constituencies. The platform
                was developed as a response to the lack of provisions for the
                citizens to make informed voting decisions in the elections. The
                platform garnered{" "}
                <strong>over 12 million views in less than 2 weeks</strong> and
                was lauded by the public.
              </p>
            </Summary>

            <CasestudyRole className="centered">
              <div className="container">
                <div className="role">
                  <h4>Role</h4>
                  <p>
                    I served as the <strong>Tech and Design Lead</strong> of the
                    project, in charge of ideating the platform design and
                    building it using a no-code tool, along with creating with
                    marketing collaterals.
                  </p>
                </div>
                <div className="break"></div>
                <div className="timeline">
                  <h4>Timeline</h4>
                  <p>Feb 2021 - May 2021</p>
                </div>
              </div>
              <div className="client">
                <h4>Client</h4>
                <p>Global Shapers Chennai, World Economic Forum</p>
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
                      <span className="label">Balsamiq</span>
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
                      <span className="label">Adobe Photoshop</span>
                    </Tag>
                    <Tag
                      css={css`
                        background-color: ${colors.blue200};
                        color: ${colors.blue600};
                      `}
                    >
                      <span className="label">Google Appscript</span>
                    </Tag>
                    <Tag
                      css={css`
                        background-color: ${colors.blue200};
                        color: ${colors.blue600};
                      `}
                    >
                      <span className="label">Glide App</span>
                    </Tag>
                  </Fragment>
                </TagsContainer>
              </div>
            </CasestudyRole>

            <Challenge className="centered">
              <div className="container">
                <h2>Challenge</h2>
                <p>
                  Election manifesto plays a key role in determining the voting
                  behaviour of the voters in the Tamil Nadu electoral politics.
                  Enabling people with information about manifestos, promises,
                  and candidate details can lead to informed voting decisions.
                  Even though, the citizens were keen on taking informed voting
                  decisions, there existed multiple challenges:
                  <br />
                  <ul>
                    <li>
                      Learning the election promises required significant time
                      and effort since the information was scattered.
                    </li>
                    <li>
                      Prominent news medias were unreliable due to lobbying and
                      biases.
                    </li>
                    <li>
                      Candidate data from the Election Commission of India was
                      not accessible for the common citizens to compare.
                    </li>
                  </ul>
                  <div className="challenge-emphasis">
                    The challenge was to develop a solution to help the citizens
                    make an informed voting decision in the 2021 Tamil Nadu
                    Legislative Assembly Elections.
                  </div>
                </p>
              </div>
            </Challenge>
            <Process className="centered">
              <section>
                <h2>Process</h2>
                {/* User Research Section*/}
                <h3 className="sub-sub-heading">User Research</h3>
                <p>
                  The user research process involved{" "}
                  <strong>
                    design interviews, competitor analysis, and a survey
                  </strong>{" "}
                  to understand young people’s perception towards elections and
                  voting. The user research was done to unpack the following
                  questions:
                  <ul>
                    <li>
                      What did the young voters look for while selecting a
                      candidate?
                    </li>
                    <li>
                      What were the resources available for voters to make an
                      informed voting decision?
                    </li>
                    <li>
                      What role did candidates’ data play in influencing the
                      voting decisions of the young voters?
                    </li>
                    <li>
                      What were some of the effective mediums to reach young
                      voters?
                    </li>
                  </ul>
                  After the launch, the platform was continuously enhanced based
                  on the engagement metrics and feedback from the users.
                  <img
                    src={require("../../images/projects/ep/user-insights.png")}
                    alt="user research findings"
                    className="full-width-img"
                  />
                </p>
              </section>
              {/* Insights Section*/}
              <section>
                <h3 className="sub-sub-heading">Insights</h3>
                <p>
                  Research revealed various insights which significantly shaped
                  the platform:
                </p>
                <div className="grid-container">
                  <div className="box-1">
                    {/* <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="system"
                        icon="university"
                        className="title-icon"
                      />
                      <h4>System Level</h4>
                    </div> */}
                    <ul>
                      <li>
                        First-time voters saw their votes to be valuable and
                        were determined to make an informed voting decision.
                      </li>
                      <li>
                        80% of the people who participated in the survey or
                        interview didn’t knew about all the candidates who
                        contested in their constituency.
                      </li>
                      <li>
                        First-time voters cared more about the promises and the
                        candidates than the history of the party.
                      </li>
                      <li>
                        Young voters primarily relied on the elders in their
                        families to decide whom to vote for.
                      </li>
                      <li>
                        All the parties released election manifestos, even the
                        small scale ones. However, only the big parties got
                        attention from the press.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* User Personas Section*/}
              <section>
                <h3 className="sub-sub-heading">User Personas</h3>
                <div className="persona-container">
                  <div className="persona-image-container">
                    <img
                      src={require("../../images/projects/ep/p1.jpg")}
                      alt="Young Tamil Male"
                      className="persona-profile-image"
                    />
                  </div>
                  <div className="persona-content-container">
                    <p className="person-details">
                      <span className="person-name">Priya</span>
                      <span className="separator first-separator">•</span>
                      <span className="persona-data-unit">
                        <span className="label">Occupation</span>
                        <span className="content">College Student</span>
                        <span className="separator">•</span>
                      </span>
                      <span className="persona-data-unit">
                        <span className="label">Age</span>
                        <span className="content">19</span>
                      </span>
                    </p>
                    <p className="persona-desc">
                      A third year college student who is voting for the first
                      time. Priya understands basic English but is more
                      proficient in Tamil.
                    </p>
                  </div>
                </div>
                <div className="persona-container">
                  <div className="persona-image-container">
                    <img
                      src={require("../../images/projects/ep/p2.jpg")}
                      alt="Old Tamil Woman"
                      className="persona-profile-image"
                    />
                  </div>
                  <div className="persona-content-container">
                    <p className="person-details">
                      <span className="person-name">Sathish</span>
                      <span className="separator first-separator">•</span>
                      <span className="persona-data-unit">
                        <span className="label">Occupation</span>
                        <span className="content">Chartered Accountant</span>
                        <span className="separator">•</span>
                      </span>
                      <span className="persona-data-unit">
                        <span className="label">Age</span>
                        <span className="content">25</span>
                      </span>
                    </p>
                    <p className="persona-desc">
                      A professional who considers themselves to be socially
                      conscious but not politically aware.
                    </p>
                  </div>
                </div>
                <div className="persona-container">
                  <div className="persona-image-container">
                    <img
                      src={require("../../images/projects/ep/p3.jpg")}
                      alt="Middle Aged Tamil Man"
                      className="persona-profile-image"
                    />
                  </div>
                  <div className="persona-content-container">
                    <p className="person-details">
                      <span className="person-name">Ragavi</span>
                      <span className="separator first-separator">•</span>
                      <span className="persona-data-unit">
                        <span className="label">Occupation</span>
                        <span className="content">Sales Executive</span>
                        <span className="separator">•</span>
                      </span>
                      <span className="persona-data-unit">
                        <span className="label">Age</span>
                        <span className="content">32</span>
                      </span>
                    </p>
                    <p className="persona-desc">
                      Ragavi has voted several times and is politically aware.
                      However, she is facing trouble knowing more about the
                      independent candidates in her constituency.
                    </p>
                  </div>
                </div>
              </section>
              {/* Conceptualization Section*/}
              <section>
                <h3 className="sub-sub-heading">Conceptualization</h3>
                <p>
                  The wireframes were created in Balsamiq to determine the
                  information hierarchy and flow. After iterating the wireframes
                  several times by testing them with the users, the platform was
                  built in a no-code platform called Glide.
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
                      src={require("../../images/projects/ep/wf1.jpg")}
                      alt="Balsamiq Wireframes"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/ep/wf2.jpg")}
                      alt="Balsamiq Wireframes"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/ep/wf3.jpg")}
                      alt="Balsamiq Wireframes"
                    />
                  </div>
                </Carousel>
              </section>
              <section></section>
            </Process>
            <Solution className="centered">
              <h2>Solution</h2>
              <div className="solution-grid solution-hero-grid">
                <div className="box-1">
                  <p className="solution-hero-text">ElectionPromises.in</p>
                  <p className="solution-main">
                    ElectionPromises.in is a bilingual platform to help citizens
                    make an informed voting decision by comparing the party
                    promises from the corresponding party manifestos and
                    candidate details contesting in their constituencies in 2021
                    Tamil Nadu Legislative Assembly Elections.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/ep/solution-hero.png")}
                    alt="homescreen"
                    className="solutions-img solution-hero-img"
                  />
                </div>
              </div>
              <div className="solution-grid">
                <div className="box-1">
                  <p className="key-text">Know The Party Promises</p>
                  <p className="sub-text">
                    View all the promises made by the parties in different focus
                    areas.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/ep/view-promises.png")}
                    alt="user research findings"
                    className="solutions-img"
                  />
                </div>
              </div>
              <div className="solution-grid reverse">
                <div className="box-1">
                  <img
                    src={require("../../images/projects/ep/compare.png")}
                    alt="user research findings"
                    className="solutions-img"
                  />
                </div>
                <div className="box-2">
                  <p className="key-text">Compare The Promises</p>
                  <p className="sub-text">
                    Compare the similar promises made by different parties!
                  </p>
                </div>
              </div>
              <div className="solution-grid">
                <div className="box-1">
                  <p className="key-text">Know The Candidates</p>
                  <p className="sub-text">
                    Learn about the details of all the candidates contesting in
                    the constituency.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/ep/candidate-profile.png")}
                    alt="user research findings"
                    className="solutions-img"
                  />
                </div>
              </div>
              <div className="solution-grid reverse">
                <div className="box-1">
                  <img
                    src={require("../../images/projects/ep/focus.png")}
                    alt="user research findings"
                    className="solutions-img"
                  />
                </div>
                <div className="box-2">
                  <p className="key-text">Explore Promises By Focus Areas</p>
                  <p className="sub-text">
                    Explore the promises by the parties in different focus areas
                    such as agriculture, education, industry development, etc.
                  </p>
                </div>
              </div>
            </Solution>
            <Testing className="centered">
              <div className="container">
                <h2>Usability Testing</h2>
                <p>
                  Building the platform using Glide allowed us to do quick
                  experiments with various features and usability without adding
                  any development overhead.
                  <br />
                  <ul>
                    <li>
                      <b>Integrated Analytics</b>: Majority of the buttons in
                      the platform were designed in a way to also count clicks
                      to get deeper insights on the user engagement. The click
                      counts combined with Google Analytics data served as a
                      rich resource for making informed design decisions. The
                      design decisions around making the platform more shareable
                      originated from this data which lead to a massive organic
                      reach.
                    </li>
                    <li>
                      <b>Expert Reviews</b>: The social impact nature of the
                      platform gave us access to several experts in the UX space
                      who shared nuanced tips on making the data more
                      consumable. This expert guidance combined with user
                      observations played a pivotal role in improving the
                      usability of the platform.
                    </li>
                  </ul>
                </p>
              </div>
            </Testing>
            <Results className="centered">
              <div className="container">
                <h2>Results</h2>
                <p>
                  The platform was received well by the citizens of Tamil Nadu
                  and got media coverage as well. With organic word of mouth and
                  celebrity endorsements, the platform became viral a week
                  before the elections. The effectiveness of the platform was
                  revealed when people came forward to mention that they
                  reconsidered their primary voting choice after viewing the
                  information presented in the platform.
                </p>
                <div className="results-grid">
                  <div className="box-1">
                    <p className="key-text">12M</p>
                    <p className="sub-text">
                      Total Views{" "}
                      <HeroText
                        tooltipId="gist-tooltip"
                        tooltipText="Total views garnered by the platform"
                      >
                        <FontAwesomeIcon
                          aria-label="information"
                          icon="info-circle"
                          className="info-icon"
                        />
                      </HeroText>
                    </p>
                  </div>
                  <div className="box-2">
                    <p className="key-text">3 mins</p>
                    <p className="sub-text">
                      Average Session Time{" "}
                      <HeroText
                        tooltipId="gist-tooltip"
                        tooltipText="Average time spend by an user in the platform per session."
                      >
                        <FontAwesomeIcon
                          aria-label="information"
                          icon="info-circle"
                          className="info-icon"
                        />
                      </HeroText>
                    </p>
                  </div>
                  <div className="box-3">
                    <p className="key-text">4</p>
                    <p className="sub-text">
                      Average Sessions Per User{" "}
                      <HeroText
                        tooltipId="gist-tooltip"
                        tooltipText="Average number of sessions by each user in the platform."
                      >
                        <FontAwesomeIcon
                          aria-label="information"
                          icon="info-circle"
                          className="info-icon"
                        />
                      </HeroText>
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="sub-sub-heading">Media Mentions</h3>
              <p>
                The platform received notable mentions in the media and got
                endorsed by several public figures. Following are links to some
                of the mentions that the platform received:
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://indianexpress.com/elections/tn-polls-global-shapers-chennai-hub-website-voters-informed-decisions-voting-7259420/"
                >
                  The Indian Express
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://chennai.citizenmatters.in/chennai-assembly-elections-2021-manifesto-promises-aiadmk-dmk-mnm-bjp-26688"
                >
                  Citizen Matters
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://yocee.in/tn-elections-2021-know-and-compare-promises-by-potitical-parties-online/"
                >
                  Yocee.in
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.newindianexpress.com/cities/chennai/2021/mar/27/paving-way-for-political-presence-2282087.html"
                >
                  The New Indian Express
                </a>
                <br />
                <br />
                The project also received special appreciation at the{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.thehindu.com/news/cities/chennai/chennai-resident-presents-model-project-at-wefs-global-shapers-curator-summit/article65874190.ece"
                >
                  World Economic Forum
                </a>{" "}
                where several global leaders appreciated the effort to
                strengthen civic engagement in local communities and also showed
                interest in replicating the same for their communities.
              </p>
            </Results>
          </CasestudyBody>
          <CasestudyNavigationBlock
            navigations={{
              firstNavigationTitle: "GCC Vaccination Portal",
              firstNavigationImg: "gcc/cover.png",
              firstNavigationLink: "/resume/gccvac",
              secondNavigationTitle: "Tales For Tweens",
              secondNavigationImg: "tft/cover.png",
              secondNavigationLink: "/resume/tales-for-tweens",
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

export default electionpromises
