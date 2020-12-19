import React from 'react';
import MineField from './MineField.js';
import NavBarView from './views/NavBarView.js';

const NavBar = () => {
    const [height, setHeight] = React.useState(16);
    const [width, setWidth] = React.useState(30);
    const [mines, setMines] = React.useState(50);
    const [restart, setRestart] = React.useState(0);
    return (
    <div key={`${width} ${restart}`}>
        <NavBarView setHeight={setHeight} setWidth={setWidth} setMines={setMines} setRestart={setRestart} restart={restart}/>
        <MineField height={height} width={width} mines={mines}/>
    </div>
    )
}


export default NavBar;