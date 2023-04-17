import React from "react";
import { useQuery } from "@apollo/client";
import {Card} from "react-bootstrap";
// import { ARTS } from "../assets/artArray"

import { QUERY_ART } from '../utils/queries';

const ArtistCard = () => {
    //option to filter artist by their medium
// const photographer = ARTS.filter(art =>
//     art.medium === 'photography');
    const {loading, data} = useQuery(QUERY_ART);
    const artData = data?.arts || [];

    if (loading) {
        return <h3>Loading...</h3>
    }

    return(
    <section>
        {artData.map((art) =>   (
            <Card id="artist-card" key={art._id} className="pt-5 m-3">
                <Card.Title>{art.artist}</Card.Title>
                <img
                className="avatar"
                src={art.avatar}
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