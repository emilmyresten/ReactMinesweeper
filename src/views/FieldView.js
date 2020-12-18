import Cell from '../Cell.js';

const FieldView = ({mineField}) => {
    console.log(mineField)
    return (
        <div>
            {
            mineField.map(row => 
            <div className="rowCell">
                {
                row.map(cell => 
                <div 
                className="inRowCell"
                >
                    <Cell />
                </div>)
                }
            </div>)
            }
        </div>
    )
}

export default FieldView;