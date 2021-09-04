import React from "react"
import styled from "@emotion/styled"
import ReactReadMoreReadLess from "react-read-more-read-less"
import ScrollAnimation from "react-animate-on-scroll"

const Publication = styled("section")``

const Publications = ({ publications }) => (
  <Publication>
    <h3>Publications</h3>
    {publications.map((publication, i) => (
      <div key={i}>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          <a
            className="heading-link"
            target="_blank"
            rel="noreferrer"
            href={publication.link.url}
          >
            <h4>
              {publication.title[0].text} <span>&#8594;</span>
            </h4>
          </a>
          <h5>{publication.publication_name[0].text}</h5>
          <p>
            <ReactReadMoreReadLess
              readMoreText="Expand"
              readMoreClassName="read-more-btn"
              readLessText=""
            >
              {publication.description[0].text}
            </ReactReadMoreReadLess>
          </p>
          {/* <p>{publication.description[0].text}</p> */}
        </ScrollAnimation>
      </div>
    ))}
  </Publication>
)

export default Publications
