import React from "react";

// import { waterColorA }  from "../imgs/index";
// import { arts } from "../imgs/gallery.js";
import {arts} from "../utils/artData"

// empty array for images
// const images = [];

export default function FeaturedArt(){
    return (
        <section id="gallery" className="container gallery-container">
            <div className="row">
                {arts.map((art) =>(
                    <div className="col">

                        <div className="card artCard">
                            <img src={art.image} alt={art.alt} className=""/>

                        </div>

                    </div>
                ))}

            </div>


        </section>
    )
}










//to loop through arts and push to images array
// for (const art in arts) {
//     images.push(<img
//         key={art}
//         className='arts'
//         alt={art}
//         src={arts[art].image}
//         aria-label={art}
//         // role='button'
//         // onClick={displaySomething}
//     />)
// }

// //JSX to be rendered
// const FeaturedArt = () => {
//    return ( 
//     <section className="galleryArt">
     
//     <div className="container">
//         <h2>Featured Art</h2>
//         <div className="galleryImages">
//              <div className='card arts'>{images}</div>
//         </div>
//     </div> 
//     </section>
//    );
// };

// export default FeaturedArt;