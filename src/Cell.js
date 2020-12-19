import React from 'react';
import CellView from './views/CellView.js';

const Cell = ({props: { isMine, MineField, selfIndex}}) => {
    
    const [mine, setMine] = React.useState(isMine)
    const [flag, setFlag] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const [adjacent, setAdjacent] = React.useState(0)
    const [selfHeight, selfWidth] = selfIndex
    MineField[selfHeight][selfWidth] = [mine, flag, visible, adjacent, setVisible, setAdjacent]


    console.log(MineField)
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
    let n = 0;
    let [selfHeight, selfWidth] = selfIndex;
    for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
            try {
                if (MineField[selfHeight+h][selfWidth+w][0] === true) {
                    n++;
                }
            } catch {
                console.log("at corner");
            }
        }
    }
    return n;
}


function recursivelyOpen(MineField, selfIndex) {
    const [selfHeight, selfWidth] = selfIndex
    let n = checkAdjacent(MineField, selfIndex)
    MineField[selfHeight][selfWidth][5](n);
    if (n > 0) {
        console.log("close recursion")
    } else {
        console.log("open more")
        openAdjacent(MineField, selfIndex)
    }
}


function openAdjacent(MineField, selfIndex) {
    let [selfHeight, selfWidth] = selfIndex;
    for (let h = -1; h < 2; h++) {
        for (let w = -1; w < 2; w++) {
            try {
                if (MineField[selfHeight+h][selfWidth+w][2] === false) {
                    const adj = checkAdjacent(MineField, [selfHeight+h, selfWidth+w], MineField[selfHeight+h][selfWidth+w][5])
                    MineField[selfHeight+h][selfWidth+w][5](adj);
                    MineField[selfHeight+h][selfWidth+w][4](true)
                    if (adj === 0) {
                        if ((selfHeight+h !== selfHeight) && (selfWidth+w !== selfWidth)) {
                            console.log(selfHeight+h, selfWidth+w)
                        }
                    } else {
                        return
                    }
                }
            } catch {
                return
            }
        }
    }
}