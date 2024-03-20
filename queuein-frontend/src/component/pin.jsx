import React from 'react';
import '../index.css';

const Pin = (props) => {
    return (
        <div className="pinBox" >
            <div className="pinBoxText">
                <h1>{props.queueID}</h1>
            </div>
        </div>
    );
}

export default Pin;