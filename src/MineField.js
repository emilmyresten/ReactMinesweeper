import React from 'react';
import Cell from './Cell.js';
import MineFieldView from './views/MineFieldView.js';


const MineField = () => {
    //lets start with 9x9 matrix
    //in this presenter we will handle all the recursion and
    const [height, setHeight] = React.useState(9)
    const [width, setWidth] = React.useState(9)
    
    const mines = 10;
    const cells = new Array(height).fill().map(()=>Array(width).fill(0));
    for (let i = 0; i < mines; i++) {
        let placed = false;
        while (!placed) {
            const [mine_h, mine_w] = getRandomInts(height, width);
            if (cells[mine_h][mine_w] !== 1) {
                cells[mine_h][mine_w] = 1;
                placed = true
            }

        }
    }
    console.log(cells)
    return <MineFieldView MineField={cells}/>
}


export default MineField;


function getRandomInts(height, width) {
    const min = Math.ceil(0);
    const max_h = Math.floor(height-1);
    const max_w = Math.floor(width-1);
    return [(Math.floor(Math.random() * (max_h - min + 1)) + min), 
            (Math.floor(Math.random() * (max_w - min + 1)) + min)];
}