import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Tile from './Tile.js'


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [] //empty array for tiles

        }
        this.tileSwap = this.tileSwap.bind(this);
    }

                    //   TILE SWAP FUNCTION   //
    tileSwap(currentPosClick) {

        //parse result of equation from decimal a to an integer
        var clickRow = parseInt(currentPosClick / 4)
        var clickCol = currentPosClick % 4

        var indexOfBlankItem = this.state.tiles.findIndex(i => i.currentPos === 15)

        var blankRow = parseInt(indexOfBlankItem / 4)
        var blankCol = indexOfBlankItem % 4
    


        var canSwitch = false;

        if (clickRow === blankRow && Math.abs(blankCol - clickCol) === 1) {
            canSwitch = true;

        } else if (blankCol === clickCol && Math.abs(blankRow - clickRow) === 1) {
            canSwitch = true;
        }


        if (canSwitch) {
 
            /*Create temp variable to hold current state
            set state type of blank tile and clicked tile.
            create temp blank tile variable to store current pos.
            swap blank currentPos with clicked currentPos

             */
           
            var tempTiles = this.state.tiles
            tempTiles[indexOfBlankItem].type = "regular"
            tempTiles[currentPosClick].type = "blank"
            var tempBlankPos = tempTiles[indexOfBlankItem].currentPos
            tempTiles[indexOfBlankItem].currentPos = tempTiles[currentPosClick].currentPos
            tempTiles[currentPosClick].currentPos = tempBlankPos

            this.setState({
                tiles: tempTiles

            })

        }

    }

                        //BUILD BOARD FUNCTION//

    async buildBoard() {
        var newTiles = [];
        var num = 16;

        for (let i = 0; i < num; i++) {
            let tileObj = {
                id: i,
                currentPos: i,
                winPos: i,
                type: "regular",
            }

            newTiles.push(tileObj);

        }


        if (newTiles[newTiles.length - 1].type === "regular") {
            newTiles[newTiles.length - 1].type = "blank";
            newTiles[newTiles.length - 1].text = "";
        }



        await this.setState({
            tiles: newTiles
        })

        
        
    }

    componentDidMount() {
        this.buildBoard()
    }

    render() {
        return (
            <React.Fragment>

                <Row><Col
                    xs={{ offset: 1, size: 10 }}
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