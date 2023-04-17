import React from "react";
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


import "../styles/components/artGallery.css"
import "../styles/components/card.css"
import {ARTS} from "../assets/artArray"



// function FilterableGalleryTable({arts}){
//     return(
//         something
//         // <SearchBar/>
//         // <GalleryTable/>
//     );
// }


export default function FeaturedArt(){
    return (
        <section id="gallery" className="gallery-container">
            <Row>
                {ARTS.map((art) =>(
                    <Col  className="p-4 single">
                        <Card id="art-card" className="m-20" key={art.id}>
                                <Card.Img variant='top' src={art.image} alt={art.alt} className="artImg"/>
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
}

// export default function FeaturedArt() {
//     return <FilterableGalleryTable arts = {arts} />
// }








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