import React from 'react';
import { Col } from 'reactstrap';


class Tile extends React.Component {
    constructor (props){
        super (props);
        this.handleClick=this.handleClick.bind(this)
        this.state={
            position: -1
        }
    }
componentDidMount(){
    this.setState({
        position: this.props.tileObj.currentPos
    })
}


    handleClick(e){
        e.preventDefault()
       this.props.tileSwap(this.state.position)
     

    }



render () {
    return(
    
        <Col
        xs="3"
        className="border makeBigger"
        key={this.props.i}
        id={this.props.item}
       onClick={this.handleClick}

    >
        { this.props.i}
    </Col>
    )
}
}
export default Tile 