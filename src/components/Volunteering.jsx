import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const Volunteering = ({ volunteering }) => (
  <section>
    <h2>Volunteering</h2>
    {volunteering.map((experience, i) => (
      <div key={i}>
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
                {experience.title[0].text}
                <span>&#8594;</span>
              </h4>
            </a>
          )}
          {experience.link == null && <h4>{experience.title[0].text}</h4>}
          <h5>
            {experience.orgName[0].text}{" "}
            <span className="float-right"> {experience.timeframe[0].text}</span>
          </h5>
          <p>{experience.description[0].text}</p>
        </ScrollAnimation>
      </div>
    ))}
  </section>
)

export default Volunteering
