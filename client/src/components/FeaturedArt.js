import React from "react";

import "../styles/components/artGallery.css"
import "../styles/components/card.css"
import {arts} from "../utils/artData"
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// function FilterableGalleryTable({arts}){
//     return(
//         something
//         // <SearchBar/>
//         // <GalleryTable/>
//     );
// }

// function SearchBar(){
//     return (
//         <form>
//             <input
//             type="text"
//             placeholder="Search Artist"
//             />
//             <label>
//                 <input
//                 type="checkbox"
                
//                 />
//                 Only show art for sale
//             </label>
//         </form>
//     );
// }

export default function FeaturedArt(){
    return (
        <section id="gallery" className="gallery-container">
            <Row>
                {arts.map((art) =>(
                    <Col className="p-4 single">
                        <Card id="art-card" className="m-20" key={art.id}>
                                <Card.Img variant='top' src={art.image} alt={art.alt} className="artImg"/>
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title">{art.title}</Card.Title>
                                    <Card.Text className="card-text">{art.description}</Card.Text>
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