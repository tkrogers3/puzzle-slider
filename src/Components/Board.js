///Function to randomize tiles

/*Function to declare winner (title values 
    back in original properties.) 
    
    Click handler for each tile-click tile and relay the tiles index in the tiles
    array to the component that maintains state.
    Associate the tile with the index in the array
    find the position with the array of the clicked tiles
    tiles[clickedItemIndex].currentPos(return 8)

    function to check position of tile
      
find pos of blank tile
      -loop through tile, return the index of the blank tile(index 1)
        -return the index item[i].currentPos == 0
         - blank obj is  = tiles[blankItemIndex] // id, CurrentPos, winPos, type.

    TILE-
    find black tile position--need position of col and row so you
    cant change between end of row/beginning of neighbor row
    */

import React, { Component } from 'react';
import {Col, Row } from 'reactstrap';
import Tile from './Tile.js'


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [] //empty array for tiles

        }

    }


    // tileSwap() {
    //     //Function to move tiles-how to think of the problem
    // }

    async buildBoard() {
        var newTiles = [];
        var num = 16;

        for (let i = 0; i < num; i++) {
            let tileObj = {
                id: i,
                currentPos: i,
                winPos: i,
                type: "regular"
            }

            newTiles.push(tileObj);

        }
        await this.setState({
            tiles: newTiles
        })

        console.log(this.state.tiles)
    }

    handleClick(e){
        //this.props.tileSwap()
        console.log("button was clicked")
    }
    componentDidMount() {
        this.buildBoard()
    }

    render() {
        return (
            <React.Fragment>
                <Row><Col xs className="text-info" >{"Puzzle Slider"}</Col></Row>
                <Row className="m-2">
                    {this.state.tiles.map((item, i) => (
                        <Tile key={i} onClick={this.handleClick} i={i} item={item} />
                    ))}
                </Row>
            </React.Fragment>
        )
    }
}
export default Board;