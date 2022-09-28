import React, { Fragment } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styled from "@emotion/styled"

const CertificationSection = styled("section")`

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

const Certifications = ({ certifications }) => (
  <CertificationSection>
    <h3>Certifications</h3>
    {certifications.map((certificate, i) => (
      <Fragment key={i}>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          {certificate.link && (
            <a
              className="heading-link"
              target="_blank"
              rel="noreferrer"
              href={certificate.link.url}
            >
              <h4>
                {certificate.name[0].text}
                <span>&#8594;</span>
              </h4>
            </a>
          )}
          {certificate.link == null && <h4>{certificate.name[0].text}</h4>}
          <h5>
            {certificate.institution[0].text}
            <span className="float-right"> {certificate.year[0].text}</span>
          </h5>
          {certificate.description && (
            <p>{certificate.description[0].text}</p>
          )}
        </ScrollAnimation>
      </Fragment>
    ))}
  </CertificationSection>
)

export default Certifications
