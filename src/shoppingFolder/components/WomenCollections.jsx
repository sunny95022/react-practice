
import React from 'react';

const WomenCollections = (props) => {
    const {title, image1, image2, image3, image4, image5, image6, image7, image8} = props.ladiesFashion

    return ( 
        <div className='womenCollectionSection'>
            <div className='ladiesBanner'>
                <img src="assets/LadiesBanner.gif" alt="banner" />
            </div>
            <h2>{title}</h2>
            <div className="ladiesImages">
                <img src={image1} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
                <img src={image4} alt={title} />
                <img src={image5} alt={title} />
                <img src={image6} alt={title} />
                <img src={image7} alt={title} />
                <img src={image8} alt={title} />
            </div>
        </div>
     );
}
 
export default WomenCollections;