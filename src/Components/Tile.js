import React from 'react';
import { Col } from 'reactstrap';


class Tile extends React.Component {
    constructor (props){
        super (props);
        this.handleClick= this.handleClick.bind(this);
    }


handleClick(e){
    //this.props.tileSwap()
    console.log("button was clicked")
}

render () {
    return(
    
        <Col
        xs="3"
        className="border makeBigger"
        key={this.props.i}
        id={this.props.item}
       // onClick={this.handleClick}

    >
        {"This is Index " + this.props.i}
    </Col>
    )
}
}
export default Tile 