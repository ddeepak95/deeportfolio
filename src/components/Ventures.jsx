import React, { Fragment } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styled from "@emotion/styled"

const VentureSection = styled("section")`

div:first-of-type{
    h4
    {
        margin-top: 0px;
    }
}


h4
{
    margin-top: 12px;
}

`

const Ventures = ({ ventures }) => (
  <VentureSection>
    <h3>Entreprenuerial Ventures & Projects</h3>
    {ventures.map((venture, i) => (
      <Fragment key={i}>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          {venture.link && (
            <a
              className="heading-link"
              target="_blank"
              rel="noreferrer"
              href={venture.link.url}
            >
              <h4>
                {venture.name[0].text}
                <span>&#8594;</span>
              </h4>
            </a>
          )}
          {venture.link == null && <h4>{venture.name[0].text}</h4>}
          <h5>
            {venture.institution[0].text}
            <span className="float-right"> {venture.year[0].text}</span>
          </h5>
          {venture.description && (
            <p>{venture.description[0].text}</p>
          )}
        </ScrollAnimation>
      </Fragment>
    ))}
  </VentureSection>
)

export default Ventures
