import React from 'react'
import {Container,  Col, Card} from 'react-bootstrap'

// Style
import "./home.css"
import Carosol from '../../components/Carosol'

const Home = () => {
    return (
        <Container className='home-page mt-5'>
            <h2 className='fs-1 text-start fst-italic fw-light'>Discover the Art of Atlanta</h2>
                <Col>
                    <Card border="dark" className='text-start mt-3 p-5'> 
                    <img src='' className='card-img' alt=''/>
                    <Card.Title className='fs-2'>
                        artfolio is the place to discover, save and buy art 
                        from Atlanta's talented local artists. With an intuitive
                        user interface, you can easily access a curated list of 
                        art pieces and learn more about each artist and thier work.
                    </Card.Title>
                    <Card.Body className='card-body fs-3'>  
                    
                        <li>
                            <h3><strong >Unlock a world of art</strong></h3>
                            Our gallery offers a diverse selection of art ranging 
                            from photography to illustrations and handcrafted designs. 
                            Whatever your style, you'll be sure to find something that 
                            catches your eye.
                        </li><br/>
                        <li>
                            <h3><strong>Save and Discover</strong></h3>
                            Save any artwork that you like, so you can always 
                            come back to it later. Discover new local artists - from 
                            sculptors to painters, get to know creatives in your community.
                        </li><br/>
                        <li>
                            <h3><strong>Support local artists</strong></h3>
                            
                            Shop for local art without leaving your house! With artfolio, 
                            you can purchase stunning artwork right in Atlanta. Support 
                            small businesses and shop with ease on our secure platform.
                        </li>

                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className='p-5'>
                        <Carosol/>
                    </Card>
                </Col>

        </Container>
    )
}
export default Home;