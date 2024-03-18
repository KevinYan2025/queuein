import React from 'react';
import Pin from '../../component/pin.jsx';
import './hero.css';
import User from '../../component/user.jsx';
import Queue from '../../component/queue.jsx';

const UserQueue =() => {
    return (
        <div className='rankBoxWapper'>
         <Pin />   
        <h1 className="title">Welcome to "queue-name"</h1>
        <Queue />

        <User />
        </div>
    );
}

export default UserQueue;