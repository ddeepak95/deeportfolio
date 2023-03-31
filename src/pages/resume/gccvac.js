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
  background: ${colors.blue900};
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
    --grid-column-count: 2;
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
  width: 100%;
}

.solution-hero-img{
  border-radius: 20px;
}

.solution-hero-grid
{
  background: ${colors.blue100};  
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
  color: ${colors.blue700};
  text-align: left;
  font-weight: 800; 
  font-size: 1.6em;
  padding-top: 40px;
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
  padding-top: 100px;
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
const gccvac = () => {
  return (
    <>
      <Helmet
        title="GCC Vaccination UX Case Study | Deepak Varuvel Dennison"
        titleTemplate="GCC Vaccination UX Case Study | Deepak Varuvel Dennison"
        meta={[
          {
            name: `description`,
            content: `Case study of the GCC Vaccination Booking Portal project!`,
          },
          {
            property: `og:title`,
            content: `GCC Vaccination UX Case Study | Deepak Varuvel Dennison`,
          },
          {
            property: `og:description`,
            content: `Check out the GCC Vaccination Project case study by Deepak!`,
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
            content: `GCC Vaccination UX Case Study | Deepak Varuvel Dennison`,
          },
          {
            name: `twitter:description`,
            content: `Check out the GCC Vaccination Project case study by Deepak!`,
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
            <CasestudyTitle>GCC Vaccination Booking Portal</CasestudyTitle>
            <CasestudyMeta>
              <p>
                An online portal for Chennai's citizens to book their COVID-19
                vaccine appointments.
              </p>
            </CasestudyMeta>
          </CasestudyHeroText>

          <CasestudyHeroContainer>
            <img
              src={require("../../images/projects/gcc/cover.png")}
              alt="GCC Vaccination Portal Screens"
            />
          </CasestudyHeroContainer>

          <CasestudyBody>
            <Summary className="centered">
              <h2>Project Summary</h2>
              <p>
                GCC Vaccination Booking Portal is an{" "}
                <strong>
                  online portal to enable the citizens of Chennai to book their
                  COVID-19 vaccine appointments
                </strong>
                . The portal was developed for the Greater Corporation of
                Chennai in collaboration with the Chennai Smart City Initiative,
                as a response to the excessive crowding of people at the
                vaccination camps due to the lack of a proper appointment
                booking facility. The platform was received well by the public
                for its ease of use and it facilitated around{" "}
                <strong>215,000 vaccination bookings</strong>. The success of
                the platform led to subsequent replication in other corporations
                in the Tamil Nadu state.
              </p>
            </Summary>

            <CasestudyRole className="centered">
              <div className="container">
                <div className="role">
                  <h4>Role</h4>
                  <p>
                    I contributed as the <strong>UI/UX designer</strong> in a
                    team of four comprising of a frontend developer, a backend
                    developer, a project manager, and a UI/UX designer (myself).
                  </p>
                </div>
                <div className="break"></div>
                <div className="timeline">
                  <h4>Timeline</h4>
                  <p>June 2021 - August 2021</p>
                </div>
              </div>
              <div className="client">
                <h4>Client</h4>
                <p>Greater Chennai Corporation, Government of Tamil Nadu</p>
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
                      <span className="label">Adobe XD</span>
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
                      <span className="label">Whimsical</span>
                    </Tag>
                  </Fragment>
                </TagsContainer>
              </div>
            </CasestudyRole>

            <Challenge className="centered">
              <div className="container">
                <h2>Challenge</h2>
                <p>
                  During the second wave of COVID-19 in India, the Greater
                  Chennai Corporation (GCC) organised free vaccination drives in
                  several public health care centers. The vaccinations were done
                  on a walk-in basis in all the vaccination centers, which led
                  to numerous challenges:
                  <br />
                  <ul>
                    <li>
                      Excessive crowding at the vaccination centers leading to
                      further COVID-19 contamination.
                    </li>
                    <li>
                      Poor footfall in certain centers due to lack of awareness.
                    </li>
                    <li>
                      The walk-in queue system led to a major proportion of
                      people not getting vaccinated despite standing in long
                      queues since the vaccine availability in any given center
                      was limited.
                    </li>
                  </ul>
                  <div className="challenge-emphasis">
                    The challenge was to develop a solution to facilitate
                    COVID-19 vaccinations in Chennai city in a safe and
                    efficient way.
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
                  The user research involved efforts to understand people’s
                  approach towards availing government services and the existing
                  practices around COVID-19 vaccination processes.
                  <ul>
                    <li>
                      Understanding different ways to avail government services.
                    </li>
                    <li>
                      People's approach towards CoWin, the central government's
                      vaccination portal.
                    </li>
                    <li>
                      Different scenarios that arise at the vaccination center.
                    </li>
                    <li>
                      Behind-the-scene processes in vaccination drives at the
                      government level.
                    </li>
                    <li>
                      Existing government digital services related to COVID-19.
                    </li>
                  </ul>
                  <img
                    src={require("../../images/projects/gcc/user-insights.jpg")}
                    alt="user research findings"
                    className="full-width-img"
                  />
                </p>
              </section>
              {/* Insights Section*/}
              <section>
                <h3 className="sub-sub-heading">Insights</h3>
                <p>
                  The extensive user research led to crucial insights on two
                  levels - system level and user level.
                </p>
                <div className="grid-container">
                  <div className="box-1">
                    <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="system"
                        icon="university"
                        className="title-icon"
                      />
                      <h4>System Level</h4>
                    </div>
                    <ul>
                      <li>
                        There was already a state-run COVID-19 support call
                        center and WhatsApp support system.
                      </li>
                      <li>
                        Vaccine supply was limited because of the excessive
                        demand.
                      </li>
                      <li>
                        The vaccine supply was constantly changing because of
                        the fluctuating production
                      </li>
                      <li>
                        Government officials knew of the supply details only one
                        day before arrival.
                      </li>
                    </ul>
                  </div>
                  <div className="box-2">
                    <div className="box-title">
                      <FontAwesomeIcon
                        aria-label="users"
                        icon="users"
                        className="title-icon"
                      />
                      <h4>User Level</h4>
                    </div>
                    <ul>
                      <li>The process has to be mobile-first.</li>
                      <li>
                        50% of the population is not comfortable with English.
                      </li>
                      <li>
                        Vaccine administrators didn't have any device access in
                        the vaccination centers.
                      </li>
                      <li>
                        E-Service centers and small shops played a crucial role
                        in bridging the digital divide.
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
                      src={require("../../images/projects/gcc/p1.jpg")}
                      alt="Young Tamil Male"
                      className="persona-profile-image"
                    />
                  </div>
                  <div className="persona-content-container">
                    <p className="person-details">
                      <span className="person-name">Arun Kumar</span>
                      <span className="separator first-separator">•</span>
                      <span className="persona-data-unit">
                        <span className="label">Occupation</span>
                        <span className="content">IT Support Engineer</span>
                        <span className="separator">•</span>
                      </span>
                      <span className="persona-data-unit">
                        <span className="label">Age</span>
                        <span className="content">29</span>
                      </span>
                    </p>
                    <p className="persona-desc">
                      Arun is a tech-savvy person who lives with his wife and
                      parents. He has already taken the first dose of
                      vaccination.
                    </p>
                  </div>
                </div>
                <div className="persona-container">
                  <div className="persona-image-container">
                    <img
                      src={require("../../images/projects/gcc/p2.jpg")}
                      alt="Old Tamil Woman"
                      className="persona-profile-image"
                    />
                  </div>
                  <div className="persona-content-container">
                    <p className="person-details">
                      <span className="person-name">Sumathi</span>
                      <span className="separator first-separator">•</span>
                      <span className="persona-data-unit">
                        <span className="label">Occupation</span>
                        <span className="content">Grocer</span>
                        <span className="separator">•</span>
                      </span>
                      <span className="persona-data-unit">
                        <span className="label">Age</span>
                        <span className="content">57</span>
                      </span>
                    </p>
                    <p className="persona-desc">
                      Sumathi owns a basic mobile phone and knows only Tamil.
                      Sumathi is yet to take her first vaccination dose.
                    </p>
                  </div>
                </div>
                <div className="persona-container">
                  <div className="persona-image-container">
                    <img
                      src={require("../../images/projects/gcc/p3.jpg")}
                      alt="Middle Aged Tamil Man"
                      className="persona-profile-image"
                    />
                  </div>
                  <div className="persona-content-container">
                    <p className="person-details">
                      <span className="person-name">Suresh</span>
                      <span className="separator first-separator">•</span>
                      <span className="persona-data-unit">
                        <span className="label">Occupation</span>
                        <span className="content">Small Business Owner</span>
                        <span className="separator">•</span>
                      </span>
                      <span className="persona-data-unit">
                        <span className="label">Age</span>
                        <span className="content">45</span>
                      </span>
                    </p>
                    <p className="persona-desc">
                      Suresh owns a smartphone. He is more comfortable with
                      Tamil than English.
                    </p>
                  </div>
                </div>
              </section>
              {/* Conceptualization Section*/}
              <section>
                <h3 className="sub-sub-heading">Conceptualization</h3>
                <p>
                  Owing to the short timeframe of the project, the
                  conceptualization was done rapidly. Paper-based wireframes
                  were used to get a consensus from the team on the user flow
                  and information architecture of the platform. Then, a
                  high-fidelity prototype was designed directly in Adobe XD. The
                  prototype was used to secure approval from government
                  officials before venturing into the development process.
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
                      src={require("../../images/projects/gcc/paper.jpg")}
                      alt="paper wireframes"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/gcc/xd.jpg")}
                      alt="High Fidelity Protoype in Adobe XD"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/gcc/flows.jpg")}
                      alt="Interaction flows in Adobe XD"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../images/projects/gcc/full-board.jpg")}
                      alt="Adode XD Canvas Overview"
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
                  <p className="solution-hero-text">GCC Vaccine</p>
                  <p className="solution-main">
                    GCC Vaccination Booking Portal is a one-stop online portal
                    to enable the citizens of Chennai to book and manage their
                    COVID-19 vaccine appointments.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/gcc/gcc1.png")}
                    alt="homescreen"
                    className="solutions-img solution-hero-img"
                  />
                </div>
              </div>
              <div className="solution-grid">
                <div className="box-1">
                  <p className="key-text">
                    Choose a vaccination center by zone
                  </p>
                  <p className="sub-text">
                    Citizens could select a convenient vaccination center based
                    on the zones in Chennai.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/gcc/mock2.png")}
                    alt="user research findings"
                    className="solutions-img"
                  />
                </div>
              </div>
              <div className="solution-grid reverse">
                <div className="box-1">
                  <img
                    src={require("../../images/projects/gcc/mock1.png")}
                    alt="user research findings"
                    className="solutions-img"
                  />
                </div>
                <div className="box-2">
                  <p className="key-text">
                    View slots in the vaccination centers
                  </p>
                  <p className="sub-text">
                    The portal allowed the citizens to select convenient
                    timeslots for their vaccination appointment. The timeslots
                    and availability were designed so as to avoid crowding.
                  </p>
                </div>
              </div>
              <div className="solution-grid">
                <div className="box-1">
                  <p className="key-text">Book a slot</p>
                  <p className="sub-text">
                    The citizens were allowed to book only one slot in a session
                    to facilitate a fair availability of slots.
                  </p>
                </div>
                <div className="box-2">
                  <img
                    src={require("../../images/projects/gcc/mock3.png")}
                    alt="user research findings"
                    className="solutions-img"
                  />
                </div>
              </div>
              <div className="solution-grid reverse">
                <div className="box-1">
                  <img
                    src={require("../../images/projects/gcc/mock4.png")}
                    alt="user research findings"
                    className="solutions-img"
                  />
                </div>
                <div className="box-2">
                  <p className="key-text">Manage Slots</p>
                  <p className="sub-text">
                    The citizens were also allowed to cancel or reschedule their
                    slots to account for last minute plan changes.
                  </p>
                </div>
              </div>
            </Solution>
            <Testing className="centered">
              <div className="container">
                <h2>Usability Testing</h2>
                <p>
                  The usability testing was done in several mechanisms through
                  various stages of the design cycle:
                  <br />
                  <ul>
                    <li>
                      <b>Lo-Fi Wireframes</b>: As the platform was built on the
                      go, the paper-based wireframes were used to gauge the
                      feature requirements and receive feedback from the project
                      manager to iterate on multiple ideas quickly.
                    </li>
                    <li>
                      <b>Pilot Testing</b>: Before the official launch, the
                      platform was tested in a few zones in an unmoderated way
                      by letting the users book appointments for their
                      vaccinations and several changes were implemented based on
                      the learnings from this pilot.
                    </li>
                  </ul>
                </p>
              </div>
            </Testing>
            <Results className="centered">
              <div className="container">
                <h2>Results</h2>
                <p>
                  The platform was rolled out to facilitate COVID-19 vaccination
                  bookings for the entire Chennai city. To bridge the digital
                  divide, provisions were also made to enable people to book
                  their vaccinations through e-service centers and COVID-19
                  Helpline numbers as well. Below are some of the results
                  obtained through the platform.
                </p>
                <div className="results-grid">
                  <div className="box-1">
                    <p className="key-text">215K</p>
                    <p className="sub-text">
                      Vaccination Bookings{" "}
                      <HeroText
                        tooltipId="gist-tooltip"
                        tooltipText="Total number of vaccination bookings done through the platform!"
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
                    <p className="key-text">89%</p>
                    <p className="sub-text">
                      Booking Completion{" "}
                      <HeroText
                        tooltipId="gist-tooltip"
                        tooltipText="Total percentage of vaccination bookings that were completed after starting the booking process."
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
                    <p className="key-text">95%</p>
                    <p className="sub-text">
                      Appointment Turnout{" "}
                      <HeroText
                        tooltipId="gist-tooltip"
                        tooltipText="Total percentage of people who showed up at the vaccination center after booking their appointment."
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
                The platform got extensive media mentions and was appreciated
                both by the public and government officials for its ease of
                usage. Following are links to some of the mentions that the
                platform received:
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.thehindu.com/news/cities/chennai/chennai-corporations-vaccination-portal-gets-a-good-response/article34980187.ece"
                >
                  The Hindu
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.thenewsminute.com/article/chennai-corporation-launches-website-book-vaccine-slots-151233"
                >
                  The News Minute
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://indianexpress.com/article/cities/chennai/chennai-residents-book-covid-19-vaccination-slots-corporation-portal-7375200/"
                >
                  The Indian Express
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://timesofindia.indiatimes.com/city/chennai/chennai-corporation-launches-website-for-vaccine-slot-registration/articleshow/83810869.cms"
                >
                  The Times of India
                </a>
                <br />
                <br />
                Our team also won the{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.livechennai.com/detailnews.asp?catid=55&newsid=60994"
                >
                  Open Innovation Challenge
                </a>{" "}
                by the Tamil Nadu Start-up and Innovation Mission. The portal
                was proposed to be replicated in 5 more city corporations in the
                State of Tamil Nadu.
              </p>
            </Results>
          </CasestudyBody>
          <CasestudyNavigationBlock
            navigations={{
              firstNavigationTitle: "Election Promises",
              firstNavigationImg: "ep/cover.png",
              firstNavigationLink: "/resume/election-promises",
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

export default gccvac

// export default ({ data }) => {
//   const meta = data.site.siteMetadata
//   return <gccvac meta={meta} />
// }

// export const query = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `
