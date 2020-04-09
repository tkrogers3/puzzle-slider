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

    ///////////////////////////////////   TILE SWITCH FUNCTION   ////////////////////////////////
    tileSwap(currentPosClick) {
    
     console.log(currentPosClick)
        
        var clickRow = parseInt (this.state.tiles[currentPosClick].currentPos / 4) 
        var clickCol = this.state.tiles[currentPosClick].currentPos % 4

        var blankRow = parseInt (this.state.tiles[this.state.tiles.length -1].currentPos / 4) 
        var blankCol = this.state.tiles[this.state.tiles.length -1].currentPos % 4

       
        var canSwitch = false;
 
        if(clickRow === blankRow && Math.abs(clickCol - blankCol) === 1){
         canSwitch = true;

        } else if( blankCol === clickCol && Math.abs(clickRow - blankRow) === 1){
            canSwitch = true;
        } 

       
 
        if(canSwitch){   

      //temp variable to hold current blank position
      //let blank col type and pos = clickCol type and pos
      //this.state.tiles.type     this.state.tiles.currentPos
      //let clickCol type = blank and pos = 15
        var tempTiles = this.state.tiles
              var tempBlankPos = tempTiles[tempTiles.length -1].currentPos
              tempTiles[tempTiles.length -1].currentPos = tempTiles[currentPosClick].currentPos
              tempTiles[currentPosClick].currentPos = tempBlankPos
              

              this.setState({
                  tiles: tempTiles
                  
            })
            
        }
        
    }



    async buildBoard() {
        var newTiles = [];
        var num = 16;

        for (let i = 0; i < num; i++) {
            let tileObj = {
                id: i,
                currentPos: i,
                winPos: i,
                type: "regular",
                text: i
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

        console.log(this.state.tiles)
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