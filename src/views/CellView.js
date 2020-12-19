
import React from 'react';

const CellView = ({props: {mine, setMine, flag, setFlag, visible, setVisible, adjacent, setAdjacent, MineField, selfIndex, recursivelyOpen}}) => {
    const [lost, setLost] = React.useState(false)
    return (
        <div 
        onContextMenu={(e) => {setFlag(!flag);e.preventDefault();return false;}}
        onClick={!lost ? () => flag ? undefined : handleClick(setVisible, MineField, selfIndex,recursivelyOpen,setAdjacent) : undefined}
        >
            <div className={visible ? mine ? "mineCellSquare" : "visibleCellSquare" : flag ? "flaggedCellSquare" : "unTouchedCellSquare"}>
                {visible ? mine ? "m" : adjacent : flag ? "f" : ""}
            </div>
        </div>
    )

}


export default CellView;



function handleClick(setVisible, MineField, selfIndex, recursivelyOpen, setAdjacent) {
    const visitedFields = new Array(MineField.length).fill().map(()=>Array(MineField[0].length).fill(0));
    recursivelyOpen(MineField, selfIndex, visitedFields)
}

function handeLoss(setLost) {
    setLost(true);
}