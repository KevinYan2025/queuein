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
    useEffect(() => {
        const fetchQueueInfo = async () => {
            try {
                const response = await axios.get("http://localhost:8080/getUsers", {
                    params: {
                        queueID: params.queueID
                    }
                });
                console.log('Queue info:', response.data[0]);
                setQueueInfo(response.data[0])
            } catch (error) {
                console.error('Error fetching queue:', error);
            }
        };

        fetchQueueInfo();
    }, [params.queueID]);
    return (
        <div className='rankBoxWapper'>
         <Pin queueID={params.queueID}/>   
        <h1 className="title">Welcome to "queue-name"</h1>
        <Queue queueInfo={queueInfo}/>

        <User />
        </div>
    );
}

export default UserQueue;