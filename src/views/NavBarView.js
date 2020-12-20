import smilingemoji from '../assets/smilingemoji.png';
import gameoveremoji from '../assets/gameoveremoji.png';
import openmouthemoji from '../assets/openmouthemoji.png';
import winemoji from '../assets/winemoji.png';

import React from 'react';


const NavBarView = ({setHeight, setWidth, setMines, setRestart, restart, lost, win}) => {
    const [restartPressed, setRestartPressed] = React.useState(false)
    return (
        <div className="TopBar">
            <div className="Difficulties">
                <div 
                className="Beginner"
                onClick={()=>setBeginner(setHeight, setWidth, setMines, lost, win)}
                >
                    Beginner
                </div>
                <div 
                className="Intermediate"
                onClick={()=>setIntermediate(setHeight, setWidth, setMines, lost, win)}
                >
                    Intermediate
                </div>
                <div 
                className="Expert"
                onClick={()=>setExpert(setHeight, setWidth, setMines, lost, win)}
                >
                    Expert
                </div>
            </div>
            <div
            className={restartPressed ? "RestartClick" :"Restart"}
            onMouseDown={() => setRestartPressed(true)}
            onMouseUp={() => setRestartPressed(false)}
            onClick={()=>{setRestart(restart+=1);lost[1](false);win[1](false);}} //restart+1 forces rerender on key change for parent div. 
            >
                {!lost[0] ? win[0] ? <img src={winemoji} alt="restart"/> : <img src={smilingemoji} alt="restart"/> : <img src={gameoveremoji} alt="restart"/>}
            </div>
            <div>
                Timer
            </div>
        </div>
    )
}


export default NavBarView;


function setBeginner(setHeight, setWidth, setMines, lost, win) {
    setHeight(9);
    setWidth(9);
    setMines(10);
    lost[1](false);
    win[1](false);
}

function setIntermediate(setHeight, setWidth, setMines, lost, win) {
    setHeight(16);
    setWidth(16);
    setMines(40);
    lost[1](false);
    win[1](false);
}

function setExpert(setHeight, setWidth, setMines, lost, win) {
    setHeight(16);
    setWidth(30);
    setMines(99);
    lost[1](false);
    win[1](false);
}
