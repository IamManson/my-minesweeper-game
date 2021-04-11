import React from 'react';
import Cell from '../Cell';

const Row = props => {
    //map cells
    let cells = props.cells.map((data, index) => {
        return (
            <Cell key={index} data={data} open={props.open} flag={props.flag}/>
        )
    })
    //display cells
    return (
        <div className="row">
            {cells}
        </div>
    )
}

export default Row

