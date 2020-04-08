///Function to randomize tiles
//Function to move tiles
/*Function to declare winner (title values 
    back in original properties.) */





import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';




class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [] //empty array for tiles

        }

    }


    /*how do I want to build a board to make it 
    1. responsive
    2. dry and rendered
    3 the state needs to be set.
    4.create an array that holds the index of the tiles
    5. loop through the 16 numbers  in num and push
    the indexes to the newTile array.
    6. buildBoard needs to be async as setState cant run before
    the for loop is finished. Once the for loop is finished
    and index has been moved to newTiles array, then state can
    send newTiles to the Tiles array.
    7. Once the component mounts, then the board can be built.


    */
    async buildBoard() {
        var newTiles = [];
        var num = 16;

        for (let i = 0; i < num; i++) {
            //  if(i of num ===  15){
            //     i ="tr"
            // }
            newTiles.push(i);
        }
        await this.setState({
            tiles: newTiles
        })

        console.log(this.state.tiles)
    }

    componentDidMount() {
        this.buildBoard()
    }

    /*What do I want to render?
    4 rows- each row with 4 columns.
    What do I need to render the board?
    react strap Row and Col
    map over the tiles(item, index), create Col with key, id, i.
    
    */
    render() {
        return (
            <React.Fragment>
                <Row><Col xs className="text-info" >{"Puzzle Slider"}</Col></Row>
                <Row className="m-2">
                    {this.state.tiles.map((item, i) => (
                        <Col
                            xs="3"
                            className="border makeBigger"
                            key={i}
                            id={item}
                        >
                            {"This is Index " + i}
                        </Col>
                    ))}
                </Row>
            </React.Fragment>
        )

    }

}


export default Board;