import Cell from '../Cell.js';

const MineFieldView = ({MineField}) => {
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
                    <Cell props={{isMine: true, MineField, selfIndex: [MineField.indexOf(row), i%row.length]}} /> 
                    : 
                    <Cell props={{isMine: false, MineField, selfIndex: [MineField.indexOf(row), i%row.length]}} />}
                </div>)
                }
            </div>)
            }
        </div>
    )
}

export default MineFieldView;
