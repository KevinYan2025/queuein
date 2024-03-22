import React, { useEffect, useState } from 'react';
import '../index.css';

const Queue = ({queueInfo}) => {
    const [usernames,setUsernames] = useState([])
    useEffect(()=>{
        setUsernames((Object.entries(queueInfo)
        .filter(item => !item[1].queueOwner))
        .map(item => item[1].name))
    },[queueInfo])
    return (
    <div className='rankBoxWapper'>
        <div className='topUserBoxWapper'>
            <div className="queueTop" >
                <div className="queueTopText">
                {usernames[0]}
                </div> 
            </div>
            <div className="nextPersonBox">
                <div className="nextPersonBoxText">
                Next Person
                </div>
            </div>
        </div>
        {
             usernames.slice(1).map((name,index) => (
                <div className="otherUserBox" key={index}>
                    <div className="otherUserBoxText">
                    {name}
                    </div>
                </div>
             ))
        }
        <div className="message" >
        There are <span className="purple-text">2</span> people ahead 
        </div>  
    </div>

    )
}

export default Queue;