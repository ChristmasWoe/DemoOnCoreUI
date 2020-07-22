import React from 'react';
import ItemCard from '../itemCard/itemcard'

class CardList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <ItemCard key={index} name={item.name} description={item.description} imgsrc="https://picsum.photos/300/180" />
                        )
                    })
                }
            </div >
        );
    }
};

export default CardList;