import React from 'react';
import Pin from '../../component/Pin.jsx';
import './hero.css';
import User from '../../component/user.jsx';
import Queue from '../../component/queue.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserQueue =() => {
    const params = useParams();
    // const fetchUser = () => {
    //     axios.get("http://localhost:8080/getUsers")
    // }
    return (
        <div className='rankBoxWapper'>
         <Pin queueID={params.queueID}/>   
        <h1 className="title">Welcome to "queue-name"</h1>
        <Queue />

        <User />
        </div>
    );
}

export default UserQueue;