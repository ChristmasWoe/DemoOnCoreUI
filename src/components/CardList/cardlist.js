import React from 'react';
import ItemCard from '../itemCard/itemcard'
import "./cardlist.css"

class CardList extends React.Component {
    constructor() {
        super();
        this.state={
            mode: "list"
        }
    }

    render() {
        return (
            <div>
                {this.state.mode=="tiles"?
                    this.props.items.map((item, index) => {
                        return (
                            <ItemCard key={index} name={item.name} description={item.description} imgsrc="https://picsum.photos/300/180" />
                        )
                    })
                :
                <div className="cardsInOneList"> 
                {this.props.items.map((item, index) => {
                        return (
                            <ItemCard key={index} name={item.name} description={item.description} imgsrc="https://picsum.photos/300/180" />
                        )
                    })}
                     </div>}
            </div >
        );
    }
};

export default CardList;