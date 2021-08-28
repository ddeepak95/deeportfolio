import React, { Fragment } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'


const Awards = ({ awards }) => (
    <section>
        <h3>Awards & Recognitions</h3>
        {awards.map((award, i) => (
            <Fragment key={i}>
            <ScrollAnimation delay={200}
  animateIn='animate__fadeIn' animateOnce={true}>
            {award.link && (
            <a className="heading-link" target="_blank" rel="noreferrer" href={award.link.url}><h4>{award.name[0].text}<span>&#8594;</span></h4></a>
            )}
            {award.link == null && (
            <h4>{award.name[0].text}</h4>
            )}
            <h5>{award.institution[0].text}<span className="float-right"> {award.year[0].text}</span></h5>
            <p>{award.description[0].text}</p>
            </ScrollAnimation>
            </Fragment>  
         ))
        }
    </section>
)

export default Awards;