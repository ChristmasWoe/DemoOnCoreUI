import React from 'react';
import './itemCard.css'

const ItemCard = (props) => {
    return (
        <div className='tc grow bg-washed-blue br3 pa3 ma2 dib bw2 shadow-5'>
            <img style={{ height: props.mode == 'list' ? '800px' : '180px', width: props.mode == 'list' ? '1200px' : '300px' }} src={props.imgsrc} />
            {/* <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div> */}
        </div>
    );
};

export default ItemCard;