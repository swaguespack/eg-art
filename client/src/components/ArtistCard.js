import React from "react";
// import { useQuery } from "@apollo/client";
import {Card} from "react-bootstrap";
import { ARTS } from "../assets/artArray"


// import { QUERY_ART } from '../utils/queries';

const ArtistCard = () => {
// option to filter artist
    const Elena = ARTS.filter(art =>
        art.artist === 'Elena');

    

    // const {loading, data} = useQuery(QUERY_ART);
    // const artData = data?.arts || [];

    // if (loading) {
    //     return <h3>Loading...</h3>
    // }

    return(
    <section>
        {Elena.map((art) =>   (
            <Card id="artist-card" key={art._id} className="pt-5 m-3">
                <Card.Title>{art.artist}</Card.Title>
                <img
                className="avatar"
                src={art.img}
                alt={art.alt}
                />
                <Card.Body>
                    <Card.Text>{art.description}{art.medium}</Card.Text>
                </Card.Body>
            </Card>
        ))}
    </section>  
    );
};

export default ArtistCard;