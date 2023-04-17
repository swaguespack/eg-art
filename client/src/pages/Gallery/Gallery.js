import React from 'react'

//Components
import {FeaturedArt} from "../../components";

// Style
import "../../styles/pages/gallery.css"


const Gallery = () => {
    return (
        <div className = "gallery-page">
            <h1>Gallery</h1>
            <FeaturedArt />
        </div>
    )
}
export default Gallery;