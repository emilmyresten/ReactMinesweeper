import Cell from './Cell.js';
import FieldView from './views/FieldView.js';


const MineField = () => {
    //lets start with 9x9 matrix
    //in this presenter we will handle all the recursion and
    const mines = 10;
    const cells = new Array(9).fill().map(()=>Array(9).fill(Cell));
    return <FieldView mineField={cells}/>
}


function setCellMine(indexHeight = 0, indexWidth = 0, setMineState) {
    setMineState(true)
}


export default MineField;