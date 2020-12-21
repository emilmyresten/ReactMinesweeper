import smilingemoji from '../assets/smilingemoji.png';
import gameoveremoji from '../assets/gameoveremoji.png';
import openmouthemoji from '../assets/openmouthemoji.png';
import winemoji from '../assets/winemoji.png';

import React from 'react';


const NavBarView = ({setHeight, setWidth, width, setMines, setRestart, restart, lost, win, started, time, setTime, setStarted}) => {
    const [dropDownState, setDropDownState] = React.useState(`${width}`)

    
    const [restartPressed, setRestartPressed] = React.useState(false)



    return (
        <div 
        className="TopBar"
        key={`TopBar ${started}`}>
            <div className="Difficulties">
                <select 
                value={dropDownState}
                onChange={(e) => 
                e.target.value == "9" ? setBeginner(setHeight, setWidth, setMines, lost, win, setStarted, setTime) :
                e.target.value == "16" ? setIntermediate(setHeight, setWidth, setMines, lost, win, setStarted, setTime) :
                e.target.value == "30" ? setExpert(setHeight, setWidth, setMines, lost, win, setStarted, setTime) : undefined}>
                    <option value="9">9x9</option>
                    <option value="16">16x16</option>
                    <option value="30">16x30</option>
                </select>
            </div>
            <div
            className={restartPressed ? "RestartClick" :"Restart"}
            onMouseDown={() => setRestartPressed(true)}
            onMouseUp={() => setRestartPressed(false)}
            onClick={()=>{setRestart(restart+=1);lost[1](false);win[1](false);setTime(0); setStarted(false)}} //restart+1 forces rerender on key change for parent div. 
            >
                {!lost[0] ? win[0] ? <img src={winemoji} alt="restart"/> : <img src={smilingemoji} alt="restart"/> : <img src={gameoveremoji} alt="restart"/>}
            </div>
            <div className="Timer">
                <div>
                    {time}
                </div>
            </div>
        </div>
    )
}


export default NavBarView;


function setBeginner(setHeight, setWidth, setMines, lost, win, setStarted, setTime) {
    setHeight(9);
    setWidth(9);
    setMines(10);
    lost[1](false);
    win[1](false);
    setStarted(false);
    setTime(0);
}

function setIntermediate(setHeight, setWidth, setMines, lost, win, setStarted, setTime) {
    setHeight(16);
    setWidth(16);
    setMines(40);
    lost[1](false);
    win[1](false);
    setStarted(false);
    setTime(0);
}

function setExpert(setHeight, setWidth, setMines, lost, win, setStarted, setTime) {
    setHeight(16);
    setWidth(30);
    setMines(99);
    lost[1](false);
    win[1](false);
    setStarted(false);
    setTime(0);
}
