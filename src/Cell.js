import React from 'react';
import CellView from './views/CellView.js';

const Cell = ({props: { isMine, MineField, selfIndex}}) => {
    
    const [mine, setMine] = React.useState(isMine)
    const [flag, setFlag] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const [adjacent, setAdjacent] = React.useState(0)
    const [selfHeight, selfWidth] = selfIndex
    MineField[selfHeight][selfWidth] = [mine, flag, visible, adjacent, setVisible, setAdjacent]

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
        recursivelyOpen
    }} />
}


export default Cell;

function checkAdjacent(MineField, selfIndex) {
    // we want to check a square located at selfindex,
    // if they have adjacent mines, return the number of them
    let n = 0;
    let [selfHeight, selfWidth] = selfIndex;
    const [maxHeight, maxWidth] = [MineField.length, MineField[0].length] //these handle corners
    for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
            if (selfHeight+h < 0 || selfHeight+h >= maxHeight || selfWidth+w < 0 || selfWidth+w >= maxWidth) {
                //we dont want to do any further checkin of adjacency outside our playinfield
            } else if (MineField[selfHeight+h][selfWidth+w][0] === true) {
                n++;
            }
        }
    }
    return n;
}


function recursivelyOpen(MineField, selfIndex, visitedFields) {
    // we want to check a square. 
    // case 1: if it has 0 adjacent mines, open
    // and check every cell around it.
    // case 2: it has adjacent mines. dont open any more.
    let adjacentMines = checkAdjacent(MineField, selfIndex)

    const [selfHeight, selfWidth] = selfIndex;
    const [maxHeight, maxWidth] = [MineField.length, MineField[0].length];

    if ((selfHeight < 0 || selfHeight === maxHeight) || (selfWidth < 0 || selfWidth === maxWidth)) {
        return null
    } 

    MineField[selfHeight][selfWidth][5](adjacentMines);
    MineField[selfHeight][selfWidth][4](true);

    if (adjacentMines === 0) {
        if (!(visitedFields[selfHeight][selfWidth] === 1)) {
            visitedFields[selfHeight][selfWidth] = 1
            recursivelyOpen(MineField, [selfHeight, selfWidth-1], visitedFields)
            recursivelyOpen(MineField, [selfHeight-1, selfWidth-1], visitedFields)
            recursivelyOpen(MineField, [selfHeight-1, selfWidth], visitedFields)
            recursivelyOpen(MineField, [selfHeight-1, selfWidth+1], visitedFields)
            recursivelyOpen(MineField, [selfHeight, selfWidth+1], visitedFields)
            recursivelyOpen(MineField, [selfHeight+1, selfWidth+1], visitedFields)
            recursivelyOpen(MineField, [selfHeight+1, selfWidth], visitedFields)
            recursivelyOpen(MineField, [selfHeight+1, selfWidth-1], visitedFields)
        }
        //how do we check every square adjacent to it, without iteration? only recursion.
    } else {
        return null
    }
}