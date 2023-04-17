import React from 'react'
import {Contact} from '../../components/index'
// Style
import "../../styles/pages/about.css"

const About = () => {
    return (
        <div className = "about-page">
            <h1>Get in touch with the artist today!</h1>
            <h2>Provide your information and enter a message below to post a comment on a piece of work!</h2>
            <Contact />
        </div>
    )
}
export default About