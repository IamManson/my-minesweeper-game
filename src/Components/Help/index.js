import React from 'react'

//link property from react-router-dom library
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <div className="helpInfo">
            <p>You may be familiar with this game, but if not, here is a guide to help you play the game. 
                The rule of the game is simple, the number on the block shows the number of mines adjacent to it and you have to flag all the mines.
                </p>
                <ul>
                    <h3 className="list">Some terms:</h3>
                    <li><span><i className="icon ion-flag"></i></span> Flag: Put a flag in a zone when you have confirmed that there is a mine.</li>
                    <li><span><i className="icon ion-android-radio-button-on"></i></span> Mine: When you click a cell that has a mine in it, the game ends and you lose.</li>
                    <li>Reset: When the game has ended and you have won or lost, you can click reset and restart a new game.</li>
                </ul>
                <p className="helpEnding">Now go ahead and enjoy!</p>
                {/*Link back to game*/}
                <Link to='/'><button className="backBtn">Back</button></Link>
        </div>
    )
}

export default Help
