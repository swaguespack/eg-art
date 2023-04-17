import React from "react";
import {Card} from "react-bootstrap/Card";

export default function ArtistCard() {
    return (    
        <Card id="artist-card">
            <Card.Title>artist name</Card.Title>
            <img
            className="avatar"
            src="art image"
            alt="art alt"
            />
            <Card.Body>
                <Card.Text>art description</Card.Text>
            </Card.Body>
    
        </Card>
        );
    } 