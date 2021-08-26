import React from 'react'

const Awards = ({ awards }) => (
    <section>
        <h3>Awards & Recognitions</h3>
        {awards.map((award, i) => (
            <div key={i}>
            {award.link && (
            <a className="heading-link" target="_blank" rel="noreferrer" href={award.link.url}><h4>{award.name[0].text}<span>&#8594;</span></h4></a>
            )}
            {award.link == null && (
            <h4>{award.name[0].text}</h4>
            )}
            <h5>{award.institution[0].text}<span className="float-right"> {award.year[0].text}</span></h5>
            <p>{award.description[0].text}</p>
            </div>  
         ))
        }
    </section>
)

export default Awards;