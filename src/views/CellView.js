import flagImg from '../assets/flag.png';
import mineImg from '../assets/mine.png';
import React from 'react';

const CellView = ({props: {mine, setMine, flag, setFlag, visible, setVisible, adjacent, setAdjacent, MineField, selfIndex, recursivelyOpen, lost, visitedCells}}) => {
    return (
        <div 
        onContextMenu={!lost[0] ? (e) => {setFlag(!flag);e.preventDefault();return false;} : (e) => {e.preventDefault();return false;} }
        onClick={!lost[0] ?
            () => flag ? undefined 
            : mine ? handleLoss(lost[1], setVisible) 
            : handleClick(MineField, selfIndex,recursivelyOpen, visitedCells) 
            : undefined}
        >
            <div className={visible ? mine ? "mineCellSquare" : "visibleCellSquare" : flag ? "flaggedCellSquare" : "unTouchedCellSquare"}>
                {visible ? mine ? <img src={mineImg} alt="m"/> : adjacent === 0 ? " " : adjacent : flag ? <img src={flagImg} alt="f"/> : ""}
            </div>
        </div>
    )

}


export default CellView;



function handleClick(MineField, selfIndex, recursivelyOpen, visitedCells) {
    const [visited, mines] = visitedCells
    const possible = (MineField.length * MineField[0].length) - mines
    recursivelyOpen(MineField, selfIndex, visited)
    if (visited.flatMap(e=>e).filter(x=>x===1).length === possible) {
        console.log("win!")
    }
}

function handleLoss(setLost, setVisible) {
    setVisible(true);
    setLost(true);
    console.log("game over!")
}