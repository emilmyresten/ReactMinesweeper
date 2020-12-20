import React from 'react';
import MineField from './MineField.js';
import NavBarView from './views/NavBarView.js';

const NavBar = () => {
    const [height, setHeight] = React.useState(16);
    const [width, setWidth] = React.useState(30);
    const [mines, setMines] = React.useState(50);
    const [restart, setRestart] = React.useState(0);
    const [lost, setLost] = React.useState(false)
    const [win, setWin] = React.useState(false)
    return (
    <div 
    className="AppContainer"
    key={`${width} ${restart}`}>
        <NavBarView 
        setHeight={setHeight} 
        setWidth={setWidth} 
        setMines={setMines} 
        setRestart={setRestart} 
        restart={restart}
        lost={[lost,setLost]}
        win={[win, setWin]}
        />

        <MineField 
        height={height} 
        width={width} 
        mines={mines} 
        lost={lost} 
        setLost={setLost} 
        winState={[win, setWin]}/>
    </div>
    )
}


export default NavBar;