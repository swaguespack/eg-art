import React from "react";

// import { waterColorA }  from "../imgs/index";
import { arts } from "../imgs/gallery.js";

// empty array for images
const images = [];

//to loop through arts and push to images array
for (const art in arts) {
    images.push(<img
        key={art}
        className='arts'
        alt={art}
        src={arts[art].image}
        aria-label={art}
        // role='button'
        // onClick={displaySomething}
    />)
}


const FeaturedArt = () => {
   return ( 
    <section className="galleryArt">
     
    <div className="container">
        <h2>Featured Art</h2>
        <div className="galleryImages">
             <div className='arts'>{images}</div>
            {/* <div>
                <img className="peice-1"
                    alt=""
                    src={waterColorA}
                />
                <p>Water Color Flowers</p>
            </div> */}

        </div>
    </div> 
    </section>
   );
};

export default FeaturedArt;