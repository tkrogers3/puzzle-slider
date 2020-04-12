import React, { Component } from 'react'
import {Button } from 'reactstrap';


class ShuffleButton extends Component {
    render() {
        return (
            <div>
                <Button
                size= "lg"
                // onClick =""
                id="button"
                className="button">Shuffle
                </Button>
            </div>
        )
    }
}
export default ShuffleButton