
const NavBarView = ({setHeight, setWidth, setMines, setRestart, restart}) => {
    return (
        <div className="TopBar">
            <div 
            className="Beginner"
            onClick={()=>setBeginner(setHeight, setWidth, setMines)}
            >
                Beginner
            </div>
            <div 
            className="Intermediate"
            onClick={()=>setIntermediate(setHeight, setWidth, setMines)}
            >
                Intermediate
            </div>
            <div 
            className="Expert"
            onClick={()=>setExpert(setHeight, setWidth, setMines)}
            >
                Expert
            </div>
            <div
            className="Restart"
            onClick={()=>setRestart(restart+=1)}
            >
                Restart
            </div>
        </div>
    )
}


export default NavBarView;


function setBeginner(setHeight, setWidth, setMines) {
    setHeight(9);
    setWidth(9);
    setMines(10);
}

function setIntermediate(setHeight, setWidth, setMines) {
    setHeight(16);
    setWidth(16);
    setMines(40);
}

function setExpert(setHeight, setWidth, setMines) {
    setHeight(16);
    setWidth(30);
    setMines(99);
}
