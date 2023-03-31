import React from "react"
import PropTypes from "prop-types"
import { useState } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import og_img from "images/og-img.jpg"
import colors from "../styles/colors"
import { Gallery } from "react-grid-gallery"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import MouseScrollAnimation from "../components/MouseScrollAnimation"
import typefaces from "../styles/typefaces"
import dimensions from "styles/dimensions"

const ExperimentsHead = styled("div")`
  margin-bottom: 3em;
  text-align: center;
  h1 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0px;
  }
  .experiment-quote {
    margin: 80px 0px 160px 0px;
    font-size: 2em;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.6em;
    }
  }

  .experiment-quote span {
    font-size: 0.6em;
  }
`

const ExperimentsContainer = styled("div")`
  h2 {
    margin-bottom: 40px;
    left: 6px;
    position: relative;
    font-family: ${typefaces.sansSerif};
    text-transform: uppercase;
    letter-spacing: 26px;
    font-size: 2em;
    text-align: center;
    overflow: hidden;
    color: ${colors.grey500};
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.5em;
      letter-spacing: 20px;
    }
  }
  .ReactGridGallery {
    margin-bottom: 150px;
  }
  .ReactGridGallery div {
    justify-content: center;
  }
  .ReactGridGallery_tile-viewport:hover img {
    transform: scale(1.05);
  }
  .ReactGridGallery_tile-viewport:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.15);
  }
  .ReactGridGallery_tile-bottom-bar {
    z-index: 1;
  }
`

const images = [
  // Making Images
  {
    src: require("images/experiments/making/m2.jpg"),
    caption: "Light Board",
    tags: [
      { value: "Light Board", title: "Light Board" },
      { value: "Laser Cutting", title: "Laser Cutting" },
    ],
  },
  {
    src: require("images/experiments/making/m1.jpg"),
    caption: "T-Shirt Printing",
    tags: [{ value: "T-Shirt Printing", title: "T-Shirt Printing" }],
  },
  {
    src: require("images/experiments/making/m3.jpg"),
    caption: "3D Printing",
    tags: [{ value: "3D Printing", title: "3D Printing" }],
  },
  {
    src: require("images/experiments/making/m4.jpg"),
    caption: "Laser Cutting",
    tags: [{ value: "Laser Cutting", title: "Laser Cutting" }],
  },
  {
    src: require("images/experiments/making/m5.jpg"),
    caption: "Vinyl Cutting",
    tags: [{ value: "Vinyl Cutting", title: "Vinyl Cutting" }],
  },
  {
    src: require("images/experiments/making/m6.jpeg"),
    caption: "Wood Working",
    tags: [{ value: "Wood Working", title: "Wood Working" }],
  },
  {
    src: require("images/experiments/making/m7.jpg"),
    caption: "Tire Seating",
    tags: [{ value: "Tire Seating", title: "Tire Seating" }],
  },
  {
    src: require("images/experiments/making/m8.jpg"),
    caption: "Tire Stand",
    tags: [{ value: "Tire Stand", title: "Tire Stand" }],
  },
  {
    src: require("images/experiments/making/m9.jpg"),
    caption: "Wish Frames",
    tags: [{ value: "Wish Frames", title: "Wish Frames" }],
  },
]

const illustrations = [
  {
    src: require("images/experiments/digital/d1.png"),
    // tags: [
    //   { value: "Ocean", title: "Ocean" },
    //   { value: "People", title: "People" },
    // ],
    caption: "Rocket Illustration",
  },
  {
    src: require("images/experiments/digital/d2.png"),
    caption: "Typography",
  },
  {
    src: require("images/experiments/digital/d3.png"),
    caption: "Ashoka University Illustration",
  },
  {
    src: require("images/experiments/digital/d4.png"),
    caption: "Taj Mahal Illustration",
  },
  {
    src: require("images/experiments/digital/d5.png"),
    caption: "Scribbled Art Illustration",
  },
  {
    src: require("images/experiments/digital/d6.png"),
    caption: "Wisdom Illustration",
  },
  {
    src: require("images/experiments/digital/d7.png"),
    caption: "Hearty Run Illustration",
  },
  {
    src: require("images/experiments/digital/d8.png"),
    caption: "The Farm Illustration",
  },
]

const doodlings = [
  {
    src: require("images/experiments/doodles/d1.jpg"),
    caption: "The Scream Doodle",
  },
  {
    src: require("images/experiments/doodles/d2.jpg"),
    caption: "Spiraling",
  },
  {
    src: require("images/experiments/doodles/d3.jpg"),
    caption: "Fountain of Thoughts",
  },
  {
    src: require("images/experiments/doodles/d4.jpg"),
    caption: "Ever-changing",
  },
  {
    src: require("images/experiments/doodles/d5.jpg"),
    caption: "Empty",
  },
  {
    src: require("images/experiments/doodles/d6.jpg"),
    caption: "Self and the Universe",
  },
  {
    src: require("images/experiments/doodles/d7.jpg"),
    caption: "Contours",
  },
  {
    src: require("images/experiments/doodles/d8.jpg"),
    caption: "Heart",
  },
]

const CustomImage = []
const number = null

function RenderExperiments({ meta }) {
  const [index, setIndex] = useState(-1)
  console.log("Index: " + index)
  const currentImage = images[index]
  if (currentImage !== undefined) {
    console.log("Current Image: " + JSON.stringify(currentImage))
  }

  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage

  function handleClick(index = number, item = CustomImage) {
    console.log(item)
    setIndex(index)
  }
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  // Illustration

  const [indexIllustration, setIndexIllustration] = useState(-1)
  console.log("Index: " + indexIllustration)
  const currentImageIllustration = illustrations[indexIllustration]
  if (currentImageIllustration !== undefined) {
    console.log(
      "Current Illustration Image: " + JSON.stringify(currentImageIllustration)
    )
  }

  const nextIndexIllustration = (indexIllustration + 1) % illustrations.length
  const nextImageIllustration =
    illustrations[nextIndexIllustration] || currentImageIllustration
  const prevIndexIllustration =
    (indexIllustration + illustrations.length - 1) % illustrations.length
  const prevImageIllustration =
    illustrations[prevIndexIllustration] || currentImageIllustration

  function handleClickIllustration(
    indexIllustration = number,
    item = CustomImage
  ) {
    console.log(item)
    setIndexIllustration(indexIllustration)
  }
  const handleCloseIllustration = () => setIndexIllustration(-1)
  const handleMovePrevIllustration = () =>
    setIndexIllustration(prevIndexIllustration)
  const handleMoveNextIllustration = () =>
    setIndexIllustration(nextIndexIllustration)

  // Doodling

  const [indexDoodling, setIndexDoodling] = useState(-1)
  console.log("Index: " + indexDoodling)
  const currentImageDoodling = doodlings[indexDoodling]
  if (currentImageDoodling !== undefined) {
    console.log(
      "Current Doodling Image: " + JSON.stringify(currentImageDoodling)
    )
  }

  const nextIndexDoodling = (indexDoodling + 1) % doodlings.length
  const nextImageDoodling = doodlings[nextIndexDoodling] || currentImageDoodling
  const prevIndexDoodling =
    (indexDoodling + doodlings.length - 1) % doodlings.length
  const prevImageDoodling = doodlings[prevIndexDoodling] || currentImageDoodling

  function handleClickDoodling(indexDoodling = number, item = CustomImage) {
    console.log(item)
    setIndexDoodling(indexDoodling)
  }
  const handleCloseDoodling = () => setIndexDoodling(-1)
  const handleMovePrevDoodling = () => setIndexDoodling(prevIndexDoodling)
  const handleMoveNextDoodling = () => setIndexDoodling(nextIndexDoodling)

  // Gallery Settings
  const rowHeightValue = 250
  const marginValue = 8
  const tagStyleValues = {
    color: "rgb(255 255 255 / 90%)",
    "font-size": "0.6em",
    "font-family": "sans-serif",
    "font-weight": "700",
    "text-transform": "uppercase",
    "letter-spacing": "0.3em",
    padding: "6px 10px",
    background: "#00000070",
    "border-radius": "4px",
  }
  const tileViewportStyleValues = {
    width: "300px",
    height: "300px",
    background: "white",
    cursor: "pointer",
    overflow: "hidden",
  }
  const thumbnailStyleValues = {
    width: "100%",
    "object-fit": "cover",
    height: "300px",
    transition: "all 200ms ease-in-out",
  }

  return (
    <>
      <Helmet
        title="Experiments"
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
        <ExperimentsHead>
          <h1>Experiments</h1>
          {/* <img
            src="https://media3.giphy.com/media/QU1pSfyEynvgY/200.gif"
            alt="Scientist experimenting animation"
          /> */}
          <div>
            <p className="experiment-quote">
              Creation is a better means of self-expression than possession; it
              is through creating, not possessing, that life is revealed. <br />
              <span>~ Vida D.Scudder ~</span>
            </p>
          </div>
          <MouseScrollAnimation></MouseScrollAnimation>
        </ExperimentsHead>
        <ExperimentsContainer id="experiments">
          <h2>Digital Art</h2>
          <Gallery
            images={illustrations}
            onClick={handleClickIllustration}
            rowHeight={rowHeightValue}
            margin={marginValue}
            enableImageSelection={false}
            tagStyle={o => tagStyleValues}
            tileViewportStyle={o => tileViewportStyleValues}
            thumbnailStyle={o => thumbnailStyleValues}
          />
          {!!currentImageIllustration && (
            /* @ts-ignore */
            <Lightbox
              mainSrc={currentImageIllustration.src}
              imageTitle={currentImageIllustration.caption}
              mainSrcThumbnail={currentImageIllustration.src}
              nextSrc={nextImageIllustration.src}
              nextSrcThumbnail={nextImageIllustration.src}
              prevSrc={prevImageIllustration.src}
              prevSrcThumbnail={prevImageIllustration.src}
              onCloseRequest={handleCloseIllustration}
              onMovePrevRequest={handleMovePrevIllustration}
              onMoveNextRequest={handleMoveNextIllustration}
              enableZoom={false}
            />
          )}

          <h2>Making</h2>
          <Gallery
            images={images}
            onClick={handleClick}
            rowHeight={rowHeightValue}
            margin={marginValue}
            enableImageSelection={false}
            tagStyle={o => tagStyleValues}
            tileViewportStyle={o => tileViewportStyleValues}
            thumbnailStyle={o => thumbnailStyleValues}
          />

          {!!currentImage && (
            /* @ts-ignore */
            <Lightbox
              mainSrc={currentImage.src}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.src}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.src}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
              enableZoom={false}
            />
          )}

          <h2>Doodles</h2>
          <Gallery
            images={doodlings}
            onClick={handleClickDoodling}
            rowHeight={rowHeightValue}
            margin={marginValue}
            enableImageSelection={false}
            tagStyle={o => tagStyleValues}
            tileViewportStyle={o => tileViewportStyleValues}
            thumbnailStyle={o => thumbnailStyleValues}
          />
          {!!currentImageDoodling && (
            /* @ts-ignore */
            <Lightbox
              mainSrc={currentImageDoodling.src}
              imageTitle={currentImageDoodling.caption}
              mainSrcThumbnail={currentImageDoodling.src}
              nextSrc={nextImageDoodling.src}
              nextSrcThumbnail={nextImageDoodling.src}
              prevSrc={prevImageDoodling.src}
              prevSrcThumbnail={prevImageDoodling.src}
              onCloseRequest={handleCloseDoodling}
              onMovePrevRequest={handleMovePrevDoodling}
              onMoveNextRequest={handleMoveNextDoodling}
              enableZoom={false}
            />
          )}
        </ExperimentsContainer>
      </Layout>
    </>
  )
}

export default ({ data }) => {
  const meta = data.site.siteMetadata

  return <RenderExperiments meta={meta} />
}

RenderExperiments.propTypes = {
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
