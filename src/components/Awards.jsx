import React from 'react'

const Awards = ({ awards }) => (
    <section>
        <h3>Awards & Recognitions</h3>
        {awards.map((award, i) => (
            <div key={i}>
            <h4>{award.name[0].text}</h4>
            <h5>{award.institution[0].text}<span className="float-right"> {award.year[0].text}</span></h5>
            <p>{award.description[0].text}</p>
            </div>  
         ))
        }
    </section>
)

export default Awards;