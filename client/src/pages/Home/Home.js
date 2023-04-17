import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

// Style
import "./home.css"

const Home = () => {
    return (
        <Container className='home-page'>

                <Col>
                    <Card border="dark" className='mt-3 p-5'> 
                    <h3>Description of Application</h3>
                    <p>All the Text to describe this application.</p>
                    </Card>
                </Col>
                <Col >
                    <Card className='p-5'>
                        featured art
                    </Card>
                </Col>

        </Container>
    )
}
export default Home;