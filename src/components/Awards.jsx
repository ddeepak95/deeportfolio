import React, { Fragment, useState } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styled from "@emotion/styled"
import colors from "styles/colors"

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

const Awards = ({ awards, numberOfItemsToShow }) => {
  const allItems = awards
  const itemsCount = numberOfItemsToShow
  const itemsAvailable = allItems.length - itemsCount
  const slicedItems = allItems.slice(0, itemsCount)
  const [itemsToShow, setItems] = useState(slicedItems)
  const [showButton, setButtonDisplay] = useState(true)

  function showAllItems() {
    setItems(allItems)
    setButtonDisplay(false)
  }

  return (
    <section>
      <h2>Awards & Recognitions</h2>
      {itemsToShow.map((award, i) => (
        <Fragment key={i}>
          <ScrollAnimation
            duration={0.7}
            offset={20}
            delay={0}
            animateIn="animate__fadeIn"
            animateOnce={true}
          >
            {award.link && (
              <a
                className="heading-link"
                target="_blank"
                rel="noreferrer"
                href={award.link.url}
              >
                <h4>
                  {award.name[0].text}
                  <span>&#8594;</span>
                </h4>
              </a>
            )}
            {award.link == null && <h4>{award.name[0].text}</h4>}
            <h5>
              {award.institution[0].text}
              <span className="float-right"> {award.year[0].text}</span>
            </h5>
            <p>{award.description[0].text}</p>
          </ScrollAnimation>
        </Fragment>
      ))}
      {showButton && (
        <ShowMoreButton onClick={showAllItems}>
          + {itemsAvailable} more
        </ShowMoreButton>
      )}
    </section>
  )
}

export default Awards
