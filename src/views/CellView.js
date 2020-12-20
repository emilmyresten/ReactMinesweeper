import flagImg from '../assets/flag.png';
import mineImg from '../assets/mine.png';
import React from 'react';

const CellView = ({props: {mine, setMine, flag, setFlag, visible, setVisible, adjacent, setAdjacent, MineField, selfIndex, recursivelyOpen, lost, visitedCells, winState, openAdjacentOnFlag}}) => {
    const [hoverState, setHoverState] = React.useState(false)
    
    return (
        <div className="cellContainer"
        onContextMenu={(!lost[0] && !winState[0]) ? (e) => {setFlag(!flag);e.preventDefault();return false;} : (e) => {e.preventDefault();return false;} }
        onClick={(!lost[0] && !winState[0]) ?
            () => flag ? undefined 
            : mine ? handleLoss(lost, setVisible, MineField) 
            : handleClick(MineField, selfIndex,recursivelyOpen, visitedCells, winState) 
            : undefined}
        onMouseEnter={(e) => e.target.focus()}
        onKeyDown={(e) => e.key===" " ? handleSpaceBar(flag, setFlag, visible, openAdjacentOnFlag, MineField, selfIndex, visitedCells, adjacent) : undefined}
        >
            <div className={visible ? mine ? "mineCellSquare" : "visibleCellSquare" : flag ? "flaggedCellSquare" : "unTouchedCellSquare"}
            tabIndex="0" 
            >
                {visible ? mine ? <img src={mineImg} alt="m"/> : adjacent === 0 ? " " : adjacent : flag ? <img src={flagImg} alt="f"/> : ""}
            </div>
        </div>
    )

}


export default CellView;



function handleClick(MineField, selfIndex, recursivelyOpen, visitedCells, winState) {
    const [visited, mines] = visitedCells
    const possible = (MineField.length * MineField[0].length) - mines
    recursivelyOpen(MineField, selfIndex, visited)
    if (visited.flatMap(e=>e).filter(x=>x===1).length === possible) { 
        // if the number of visible cells are the same as 
        // the number of non-mine cells we have won.
        winState[1](true);
        for (let i=0; i < MineField.length; i++) {
            for (let j=0; j < MineField[0].length; j++) {
                if (!MineField[i][j][2]) {
                    if (!MineField[i][j][1]) {
                        MineField[i][j][6](true)
                    }
                }
            }
        }
    }   
}

function handleLoss(lost, setVisible, MineField) {
    setVisible(true);
    lost[1](true);
    for (let i=0; i < MineField.length; i++) {
        for (let j=0; j < MineField[0].length; j++) {
            if (MineField[i][j][0]) {
                if (!MineField[i][j][1]) {
                    MineField[i][j][4](true)
                }
            }
        }
    }

}


function handleSpaceBar(flag, setFlag, visible, openAdjacentOnFlag, MineField, selfIndex, visitedCells, adjacent) {
    visible ? openAdjacentOnFlag(MineField, selfIndex, visitedCells, adjacent) : setFlag(!flag);

}