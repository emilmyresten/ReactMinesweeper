import Cell from '../Cell.js';

const MineFieldView = ({MineField, lost, visitedCells, winState, setStarted}) => {
    let i = 0;
    return (
        <div className="GameContainer">
            {
            MineField.map(row => 
            <div 
            className="rowCell"
            key={MineField.indexOf(row)}>
                {
                row.map(cell => 
                <div 
                className="inRowCell"
                key={`cell ${MineField.indexOf(row)} ${i++%row.length}`}
                >
                    {cell === 1 ? 
                    <Cell props={{isMine: true, MineField, selfIndex: [MineField.indexOf(row), i%row.length], lost, visitedCells, winState, setStarted}} /> 
                    : 
                    <Cell props={{isMine: false, MineField, selfIndex: [MineField.indexOf(row), i%row.length], lost, visitedCells, winState, setStarted}} />}
                </div>)
                }
            </div>)
            }
        </div>
    )
}

export default MineFieldView;
