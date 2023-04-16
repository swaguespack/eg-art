import React from 'react'

//Components
import {FeaturedArt} from "../../components";

// Style
import "./gallery.css"


function SearchBar(){
    return (
        <form className=''> 
            <input
            type="text"
            placeholder="Search Artist"
            />
            <label>
                <input
                type="checkbox"
                
                />
                Only show art for sale
            </label>
        </form>
    );
}

const Gallery = () => {
    return (
        <div className = "gallery-page">
            <h1></h1>
            <SearchBar />
            <FeaturedArt />
        </div>
    )
}
export default Gallery;