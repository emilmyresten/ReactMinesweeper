import React from 'react';
import CellView from './views/CellView.js';

const Cell = () => {
    const [mine, setMine] = React.useState(false)
    const [flag, setFlag] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const [adjacent, setAdjacent] = React.useState(0)



    return <CellView props={{
        mine, 
        setMine, 
        flag, 
        setFlag, 
        visible, 
        setVisible,
        adjacent, 
        setAdjacent
    }} />
}


export default Cell;