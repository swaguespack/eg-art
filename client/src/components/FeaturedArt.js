import React from "react";
import { useQuery } from "@apollo/client";
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import "../styles/components/card.css"
import {ARTS} from "../assets/artArray"
// import {QUERY_ART} from '../utils/queries';


const FeaturedArt = () => {
    
    // const {loading, data} = useQuery(QUERY_ART);
    // const artData = data?.arts || [];

    // if (loading) {
    //     return <h3>Loading...</h3>
    // }

    return (
        <section id="gallery" className="gallery-container">
            <Row >
                {ARTS.map((art) =>(
                    <Col key={art._id} className="p-4 single">
                        <Card id="art-card" className="m-20" >
                            <Card.Img key={art._id} variant='top' src={art.img} alt={art.alt} className="artImg"/>
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title">{art.title}</Card.Title>
                                    <Card.Text className="card-text">{art.description}{art.medium}</Card.Text>
                                    <Button className="m-2 p-2 btn-dark">Save</Button>
                                </Card.Body>
                            
                        </Card>
                    </Col>
                ))}

            </Row>
        </section>
    );
};

export default FeaturedArt;









//to loop through arts and push to images array
// for (const art in arts) {
//     images.push(<img
//         key={art}
//         className='arts'
//         alt={art}
//         src={arts[art].image}
//         aria-label={art}
//         // role='button'
//         // onClick={displaySomething}
//     />)
// }

// //JSX to be rendered
// const FeaturedArt = () => {
//    return ( 
//     <section className="galleryArt">
     
//     <div className="container">
//         <h2>Featured Art</h2>
//         <div className="galleryImages">
//              <div className='card arts'>{images}</div>
//         </div>
//     </div> 
//     </section>
//    );
// };

// export default FeaturedArt;