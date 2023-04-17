import React from "react"
import {Card} from "react-bootstrap"
import { ARTS } from "../assets/artArray"


export default function ArtistCard () {
const renderArtistCard = ARTS.map((art, index) =>   
        <Card id="artist-card">
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
        );


    return (   
        <>{renderArtistCard}</>
    );
};