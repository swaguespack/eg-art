import React from 'react'

//Components
import FeaturedArt from "../../components/FeaturedArt";

// Style
import "./gallery.css"


function SearchBar(){
    return (
        <form className='text-start'> 
            <input
            type="text"
            placeholder="Search Artist"
            />
            <label className='p-3'>
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
            <div className='m-4 p-3'>
            <SearchBar />
            </div>
            <FeaturedArt />
        </div>
    )
}
export default Gallery;