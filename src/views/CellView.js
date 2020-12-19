
const CellView = ({props: {mine, setMine, flag, setFlag, visible, setVisible, adjacent, setAdjacent, MineField, selfIndex, recursivelyOpen}}) => {
    return (
        <div 
        onContextMenu={(e) => {setFlag(!flag);e.preventDefault();return false;}}
        onClick={() => flag ? undefined : handleClick(setVisible, MineField, selfIndex,recursivelyOpen,setAdjacent)}
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