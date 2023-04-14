import React from 'react'
import {Contact} from '../../components/index'
// Style
import "../../styles/pages/about.css"

const About = () => {
    return (
        <div className = "about-page">
            <h1>About</h1>
            <Contact className="contact-container"/>
        </div>
    )
}
export default About;