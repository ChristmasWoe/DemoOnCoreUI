import React from 'react';
import ItemCard from '../itemCard/itemcard'
import "./cardlist.css"
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    mode: state.mode
})

const mapDispatchToProps = dispatch => ({

})

class CardList extends React.Component {
    constructor() {
        super();
        this.state = {
            mode: "tiles"
        }
    }

    render() {
        const time = new Date();
        return (
            <div style={{ textAlign: 'center' }}>
                {this.props.mode == "tiles" ?
                    this.props.items.map((item, index) => {
                        return (
                            <ItemCard mode={this.props.mode} key={index} name={item.name} description={item.description} imgsrc={`https://picsum.photos/seed/${item.name + index + time.getSeconds()}/300/180`} />
                        )
                    })
                    :
                    <div className="cardsInOneList">
                        {this.props.items.map((item, index) => {
                            return (
                                <ItemCard mode={this.props.mode} key={index} name={item.name} description={item.description} imgsrc={`https://picsum.photos/seed/${item.name + index + time.getSeconds()}/1200/800`} />
                            )
                        })}
                    </div>}
            </div >
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);