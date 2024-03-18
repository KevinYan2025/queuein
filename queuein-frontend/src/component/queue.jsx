import React from 'react';
import '../index.css';

const Queue = () => {
    return (
    <div className='rankBoxWapper'>
        <div className='topUserBoxWapper'>
            <div className="queueTop" >
                <div className="queueTopText">
                Shana Wen
                </div> 
            </div>
            <div className="nextPersonBox">
                <div className="nextPersonBoxText">
                Next Person
                </div>
            </div>
        </div>
        <div className="otherUserBox" >
            <div className="otherUserBoxText">
            Avril
            </div>
        </div>
        <div className="message" >
        There are <span className="purple-text">2</span> people ahead 
        </div>  
    </div>
 


    )
}

export default Queue;