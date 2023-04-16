import React from 'react'
import {Contact} from '../../components/index'
// Style
import {Container} from 'react-bootstrap';
import "../../styles/pages/about.css"

const About = () => {
    return (
        <Container>
        <div className= "d-flex p-2 justify-content-around align-items-center">
            <div className='flex-row mb-3'>
                <div className='p-2'>
                <h1>Contact</h1>
                <Contact />
                </div>
                <div className='p-2 bg-primary'>
                    <h1>About Page</h1>
                </div>
            </div>
        </div>
        </Container>
    )
}
export default About