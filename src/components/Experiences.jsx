import React, { Fragment } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styled from "@emotion/styled"

const ExperienceSection = styled("section")`

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

const Experiences = ({ experiences }) => (
  <ExperienceSection>
    <h3>Professional Experience</h3>
    {experiences.map((experience, i) => (
      <Fragment key={i}>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          {experience.link && (
            <a
              className="heading-link"
              target="_blank"
              rel="noreferrer"
              href={experience.link.url}
            >
              <h4>
                {experience.name[0].text}
                <span>&#8594;</span>
              </h4>
            </a>
          )}
          {experience.link == null && <h4>{experience.name[0].text}</h4>}
          <h5>
            {experience.institution[0].text}
            <span className="float-right"> {experience.year[0].text}</span>
          </h5>
          {experience.description && (
            <p>{experience.description[0].text}</p>
          )}
        </ScrollAnimation>
      </Fragment>
    ))}
  </ExperienceSection>
)

export default Experiences
