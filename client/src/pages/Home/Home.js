import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

// Style
import "./home.css"

const Home = () => {
    return (
        <Container className='home-page'>
            <Row xs={1} md={2} className='g-4'>
                <Col style={{ border: '1px dotted' }}>
                    <h3>Description of Application</h3>
                    <p>All the Text to describe this application.</p>
                </Col>
                <Col>
                    <Card>this is my card</Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Home