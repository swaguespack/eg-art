import React from 'react'
import {Contact} from '../../components/index'
// Style
import {Container} from 'react-bootstrap';
import "./about.css"

const About = () => {
    return (
      
        <div className= "d-flex p-2 justify-content-around align-items-center">
            <div className='flex-row mb-3'>
                <Container className='col p-2'>

                    <h1>Contact</h1>
                <Contact />
                </Container>

                <Container className='col'>
                <div className='p-2 bg-primary'>
                    <h1>About Page</h1>
                </div>
                </Container>
            </div>
        </div>
        
    )
}
export default About