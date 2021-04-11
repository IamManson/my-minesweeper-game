import React from 'react'
//link property from react-router-dom library
import { Link } from 'react-router-dom';


const BoardHead = props => {
    //timer logic
    let minutes = Math.floor(props.time / 60);
    let seconds = props.time - minutes * 60 || 0;

    let formattedSeconds = seconds < 10 ? `0${seconds}`: seconds;
    //time counter in boardheader
    let time = `${minutes}:${formattedSeconds}`;
    return (
        <div className="boardHead">
            <div className="flag-count">{props.flagCount}</div>
            <button className="reset" onClick={props.reset}>Reset</button>
            {/*Links to help component*/}
            <Link to="/help"><button className="help">Help</button></Link>
            
            <div className="timer">{time}</div>
        </div>
    )
}

export default BoardHead
