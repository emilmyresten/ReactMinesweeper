
const CellView = ({props: {mine, setMine, flag, setFlag, visible, setVisible, adjacent, setAdjacent}}) => {
    return (
        <div 
        onContextMenu={(e) => {setFlag(!flag);e.preventDefault();return false;}}
        onClick={() => flag ? undefined : setVisible(true)}
        >
            <div className={visible ? "visibleCellSquare" : flag ? "flaggedCellSquare" : "unTouchedCellSquare"}>
                {visible ? adjacent : ""}
            </div>
        </div>
    )

}


export default CellView;