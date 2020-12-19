import React from 'react';
import MineField from './MineField.js';
import NavBarView from './views/NavBarView.js';

const NavBar = () => {
    const [height, setHeight] = React.useState(16);
    const [width, setWidth] = React.useState(30);
    const [mines, setMines] = React.useState(20);

    return (
    <div>
        <NavBarView setHeight={setHeight} setWidth={setWidth} setMines={setMines}/>
        <MineField height={height} width={width} mines={mines}/>
    </div>
    )
}


export default NavBar;