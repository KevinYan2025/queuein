import React, { useState } from 'react';
import Pin from '../../component/pin.jsx';
import './hero.css';
import User from '../../component/user.jsx';
import Queue from '../../component/queue.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UserQueue =() => {
    const params = useParams();
    const [queueInfo,setQueueInfo] = useState('')
    console.log(queueInfo);
    useEffect(() => {
        const fetchQueueInfo = async () => {
            try {
                const response = await axios.get("http://localhost:8080/getUsers", {
                    params: {
                        queueID: params.queueID
                    }
                });
                console.log('Queue info:', response.data);
                setQueueInfo(response.data);
            } catch (error) {
                console.error('Error fetching queue:', error);
                // Optionally: Set some state to indicate error to the user
            }
        };

        fetchQueueInfo(); // Fetch initially when component mounts

        const intervalId = setInterval(fetchQueueInfo, 100);

        // Clean up the interval when component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array

    return (
        <div className='rankBoxWapper'>
            <Pin queueID={params.queueID}/>
            <h1 className="title">"{params.queueName}"</h1>
            <div className="nextPersonButton">
                <Queue queueInfo={queueInfo}/>
                <button className='nextbutton'>next</button>
            </div>
            <User />
        </div>
    );
}

export default UserQueue;