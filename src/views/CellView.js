
const CellView = ({props: {mine, setMine, flag, setFlag, visible, setVisible, adjacent, setAdjacent, MineField, selfIndex, checkAdjacent}}) => {
    return (
        <div 
        onContextMenu={(e) => {setFlag(!flag);e.preventDefault();return false;}}
        onClick={() => flag ? undefined : handleClick(setVisible, MineField, selfIndex,checkAdjacent,setAdjacent)}
        >
            <div className={visible ? mine ? "mineCellSquare" : "visibleCellSquare" : flag ? "flaggedCellSquare" : "unTouchedCellSquare"}>
                {visible ? mine ? "m" : adjacent : flag ? "f" : ""}
            </div>
        </div>
    )

}


export default CellView;



function handleClick(setVisible, MineField, selfIndex, checkAdjacent, setAdjacent) {
    checkAdjacent(MineField, selfIndex, setAdjacent)
    setVisible(true)
}