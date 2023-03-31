import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const Education = ({ courses }) => (
  <section>
    <h2>Academics</h2>
    {courses.map((edu, i) => (
      <div className="info-unit" key={i}>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          <h4>{edu.courseName[0].text}</h4>
          <h5>
            {edu.institutionName[0].text}
            <span className="float-right"> {edu.period[0].text}</span>
          </h5>
        </ScrollAnimation>
      </div>
    ))}
  </section>
)

export default Education
