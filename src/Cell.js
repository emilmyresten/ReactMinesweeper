import React from 'react';
import CellView from './views/CellView.js';

const Cell = ({props: { isMine, MineField, selfIndex}}) => {
    const [mine, setMine] = React.useState(isMine)
    const [flag, setFlag] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const [adjacent, setAdjacent] = React.useState(0)



    return <CellView props={{
        mine, 
        setMine, 
        flag, 
        setFlag, 
        visible, 
        setVisible,
        adjacent, 
        setAdjacent,
        MineField,
        selfIndex,
        checkAdjacent
    }} />
}


export default Cell;

function checkAdjacent(MineField, selfIndex, setAdjacent) {
    //neeeeed to fix this function for calculating index of a cell.
    let n = 0;
    let [selfHeight, selfWidth] = selfIndex;
    if (selfWidth % 2 === 0) {
        selfWidth /= 2;
    } else {
        selfWidth += (Math.floor(MineField[0].length/2)- Math.floor(selfWidth/2));
    }
    console.log(selfHeight, selfWidth)
    for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
            if (MineField[selfHeight+h][selfWidth+w] === 1) {
                n++
            }
        }
    }
    setAdjacent(n)
    
}