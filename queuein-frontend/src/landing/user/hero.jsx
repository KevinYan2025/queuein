import React from 'react';
import './hero.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Hero = () => {

  const [pin, setPin] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleJoin = () => {
    console.log('Joining queue')
    axios.post('http://localhost:8080/createAndAddUserToQueue', null, {
      params: {
        queueID: pin,
        name: name
      }
    })
    .then(response => {
      console.log('Joined queue successfully:', response.data);
      navigate(`/userqueue/${response.data.id}/${response.data.queueName}`)
    })
    .catch(error => {
      console.error('Error joining queue:', error);
    });
  }

  const handleCreate = () => {  
    console.log('Creating queue')
    navigate('/createqueue')
  }


  return (
    <div className="hero" >
      <h1 className="title">V-Queue !</h1>
      <div className="input-wrapper">
        <input type="text" className="inputbox" placeholder="Enter 6 digit pin" onChange={event=>(setPin(event.target.value))} required/>
        <input type="text" className="inputbox" placeholder="Enter name" onChange={event=>(setName(event.target.value))} required/>
        <button className="enterBtn" onClick={handleJoin}>Enter</button>
        <button className="cyoBtn cyoText" onClick={handleCreate}> Create your own queue</button>
    </div>
    </div>
   
  );
};

export default Hero;