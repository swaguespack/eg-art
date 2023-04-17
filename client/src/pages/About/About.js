import React from 'react'
import Contact from '../../components/Contact'
// Style
import {Container, Row, Col} from 'react-bootstrap';
import "./about.css"
import "../../components/ArtistCard"
import ArtistCard from '../../components/ArtistCard';

const About = () => {
    return (    
<>
     <Container className='about-page pt-5'>
        <Row md={1} lg={2} className='g-4'>
            <Col className='p-4'>
                <h1>Meet the Artist</h1>
                <div className='p-2 m-1'>
                    <ArtistCard/>
                </div>
            </Col> 

            <Col className='p-4'>
                <h1>Contact</h1>
                <Contact/>
            </Col>  
        </Row>  
    </Container>
</>
    )
}

export default About;