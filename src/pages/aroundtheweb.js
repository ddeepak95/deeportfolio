import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import WeblinkCard from "../components/WeblinkCard";
import dimensions from "styles/dimensions"
// import Button from "../components/_ui/Button"
import og_img from "images/og-img.jpg"
import colors from "../styles/colors"

// const WebAfter = styled("div")`
//   text-align: center;
// `

const WebHead = styled("div")`
  margin-bottom: 3em;
  h1 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0px;
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
  margin-bottom: 50px;
`


// const WebAction = styled(Link)`
//   margin-bottom: 10px;
// `

const Web = ({ weblinks, meta }) => (
  <>
    <Helmet
      title="Around The Web"
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
          content: `Work | ${meta.title}`,
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
          content: `Work | ${meta.title}`,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <WebHead>
        <h1>Around The Web</h1>
        <p>
         Web is full of exciting links. Here are some links that are linked to me in some way - media features of my works, my writings, or small fun things that I created 
          <span role="img" aria-label="down-emoji">
            ⏬
          </span>
          !
        </p>
      </WebHead>
      <>
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
      </>
      {/* <WebAfter>
        <WebAction to={"/resume"}>
          <Button>See other things in the resume</Button>
        </WebAction>
      </WebAfter> */}
    </Layout>
  </>
)

export default ({ data }) => {
  const tempWeblinks = data.prismic.allWeblinkss.edges
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  const weblinks = shuffle(tempWeblinks);

  const meta = data.site.siteMetadata
  if (!weblinks) return null

  return <Web weblinks={weblinks} meta={meta} />
}

Web.propTypes = {
  weblinks: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    prismic {
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
