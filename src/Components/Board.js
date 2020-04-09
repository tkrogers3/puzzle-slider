import React, { Component } from 'react';
import {Col, Row } from 'reactstrap';
import Tile from './Tile.js'


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [] //empty array for tiles

        }
        this.tileSwap=this.tileSwap.bind(this);
    }


    tileSwap(currentClick) {
        var clickedObj = this.state.tiles[currentClick].winPos
   console.log(clickedObj )
    }

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

      
     if(newTiles[newTiles.length -1].type === "regular"){
         newTiles[newTiles.length -1].type = "blank";
         newTiles[newTiles.length -1].id = "blank";
    
     }
    


        await this.setState({
            tiles: newTiles
        })

        console.log(this.state.tiles)
    }

    componentDidMount() {
        this.buildBoard()
    }

    render() {
        return (
            <React.Fragment>
            
                <Row><Col 
                xs={{offset:1, size:10}} 
                className=" title p-4 " >
                {"Puzzle Slider"}
                </Col></Row>
                <Row className="m-2">
                    {this.state.tiles.map((item, i) => (
                        <Tile 
                        key={i} 
                        tileSwap={this.tileSwap}
                        i={i} 
                        tileObj={item} />
                    
                    ))}
                </Row>
            </React.Fragment>
        )
    }
}
export default Board;