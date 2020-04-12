import React from 'react';
import { Col } from 'reactstrap';


class Tile extends React.Component {
    constructor (props){
        super (props);
        this.state={
            position: -1
        }
        this.handleClick=this.handleClick.bind(this)
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
        className="border makeBigger tile"
        key={this.props.i}
        id={this.props.item}
       onClick={this.handleClick}

    >
     {this.props.tileObj.currentPos}
    </Col>
    )
}
}
export default Tile 