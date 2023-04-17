import React from "react"
import {Card} from "react-bootstrap"
import { ARTS } from "../assets/artArray"


export default function ArtistCard () {
    //option to filter artist by their medium
const photographer = ARTS.filter(art =>
    art.medium === 'photography');


const renderArtistCard = photographer.map((art, index) =>   
        <Card id="artist-card" key={art.id} className="pt-5 m-3">
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