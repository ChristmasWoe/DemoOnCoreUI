import React from 'react';


const ItemCard = (props) => {
    return (
        <div className='tc grow bg-washed-blue br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={props.imgsrc} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default ItemCard;