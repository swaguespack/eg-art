import React from 'react'

//Components
import {FeaturedArt} from "../../components";

// Style
import "../../styles/pages/gallery.css"

const images = [];

const Gallery = () => {
    return (
        <div className = "gallery-page">
            <h1>Gallery Page.</h1>
            <div>
            <FeaturedArt />
            </div>
            <div className='artPieces'>{}</div>
        </div>
    )
}
export default Gallery;