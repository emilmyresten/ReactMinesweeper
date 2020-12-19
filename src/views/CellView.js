import flagImg from '../assets/flag.png';
import mineImg from '../assets/mine.png';
import React from 'react';

const CellView = ({props: {mine, setMine, flag, setFlag, visible, setVisible, adjacent, setAdjacent, MineField, selfIndex, recursivelyOpen, lost}}) => {
    return (
        <div 
        onContextMenu={!lost[0] ? (e) => {setFlag(!flag);e.preventDefault();return false;} : (e) => {e.preventDefault();return false;} }
        onClick={!lost[0] ?
            () => flag ? undefined 
            : mine ? handleLoss(lost[1], setVisible) 
            : handleClick(setVisible, MineField, selfIndex,recursivelyOpen,setAdjacent) 
            : undefined}
        >
            <div className={visible ? mine ? "mineCellSquare" : "visibleCellSquare" : flag ? "flaggedCellSquare" : "unTouchedCellSquare"}>
                {visible ? mine ? <img src={mineImg} alt="m"/> : adjacent === 0 ? " " : adjacent : flag ? <img src={flagImg} alt="f"/> : ""}
            </div>
        </div>
    )

}


export default CellView;



function handleClick(setVisible, MineField, selfIndex, recursivelyOpen, setAdjacent) {
    const visitedFields = new Array(MineField.length).fill().map(()=>Array(MineField[0].length).fill(0));
    recursivelyOpen(MineField, selfIndex, visitedFields)
}

function handleLoss(setLost, setVisible) {
    setVisible(true);
    setLost(true);
    console.log("game over!")
}