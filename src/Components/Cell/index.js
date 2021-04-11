import React from 'react'

const Cell = props => {
    let cell = () => {
        if (props.data.isOpen) {
            if (props.data.hasMine) {
                //if it's open, and has mine, show m
                return ( 
                    <div 
                    className="cell open" 
                    onClick={() => props.open(props.data)}
                    onContextMenu={e => {
                        e.preventDefault();
                    }}
                    >
                         <span><i className="icon ion-android-radio-button-on"></i></span>
                        </div>
                    );
            } else if(props.data.count === 0) {
                //if it's open, and doesn't have a mine or mine near it show empty div
            return ( 
                <div 
                className="cell open" 
                onClick={() => props.open(props.data)} 
                //flag cell when right clicked
                onContextMenu={e => {
                    e.preventDefault();
                    props.flag(props.data);
                }}
                />
                ); 
            } else {
                //if it's open, and doesn't have a mine but has mine near it, show count
                return ( 
                    <div 
                    className="cell open" 
                    onClick={() => props.open(props.data)}
                    //flag cell when right clicked
                    onContextMenu={e => {
                        e.preventDefault();
                        props.flag(props.data);
                    }} 
                    >
                        {props.data.count}
                        </div>
                    );
            }
        } 
        else if (props.data.hasFlag) {
            return (
                <div 
                className="cell open" 
                onClick={() => props.open(props.data)}
                //flag cell when right clicked
                onContextMenu={e => {
                    e.preventDefault();
                    props.flag(props.data);
                }}
                >
                    <span><i className="icon ion-flag"></i></span>
                </div>
            )
        }
        
        else {
            //if not, then do this
            return  ( 
                <div 
                className="cell" 
                onClick={() => props.open(props.data)} 
                //flag cell when right clicked
                onContextMenu={e => {
                    e.preventDefault();
                    props.flag(props.data);
                }}
                />
            )
        }
    }
    return cell();
}

export default Cell
