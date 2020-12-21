import React from 'react';
import MineField from './MineField.js';
import NavBarView from './views/NavBarView.js';

const NavBar = () => {
    const [height, setHeight] = React.useState(16);
    const [width, setWidth] = React.useState(30);
    const [mines, setMines] = React.useState(10);
    const [restart, setRestart] = React.useState(0);
    const [started, setStarted] = React.useState(false);
    const [lost, setLost] = React.useState(false)
    const [win, setWin] = React.useState(false)
    const [time, setTime] = React.useState(0)

    React.useEffect(()=>{
        const timer = started && time < 999 &&
        setInterval(()=>setTime(time+1), 1000)
        return () => {
            clearInterval(timer) // we want to clear the timer with each rerender of app, which rerenders with every time increment.
        }
    }, [time, started])

 

    return (
    <div 
    className="AppContainer"
    key={`${width} ${restart}`}>
        <NavBarView 
        setHeight={setHeight} 
        setWidth={setWidth} 
        width={width}
        setMines={setMines} 
        setRestart={setRestart} 
        restart={restart}
        lost={[lost,setLost]}
        win={[win, setWin]}
        started={started}
        time={time}
        setTime={setTime}
        setStarted={setStarted}
        />

        <MineField 
        height={height} 
        width={width} 
        mines={mines} 
        lost={lost} 
        setLost={setLost} 
        winState={[win, setWin]}
        setStarted={setStarted}
        />
    </div>
    )
}


export default NavBar;