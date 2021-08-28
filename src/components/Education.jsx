import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'


const Education = ({ courses }) => (
    <section>
        <h3>Education</h3>
        {courses.map((edu, i) => (
            <ScrollAnimation delay={200}            animateIn='animate__fadeIn' animateOnce={true}>
                <div class="info-unit" key={i}>
                    <h4>{edu.courseName[0].text}</h4>
                    <h5>{edu.institutionName[0].text}<span className="float-right"> {edu.period[0].text}</span></h5>
                </div>
            </ScrollAnimation>  
         ))
        }
    </section>
)

export default Education;