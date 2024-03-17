import React from 'react';
import './hero.css';


const Hero = () => {
  return (
    <div className="hero" >
      <h1 className="title">V-Queue !</h1>
      <div className="input-wrapper">
        <input type="text" className="inputbox" placeholder="Enter 6 digit pin" />
        <input type="text" className="inputbox" placeholder="Enter name" />
        <button className="enterBtn">Enter</button>
        <button className="cyoBtn cyoText" > Create your own queue</button>
    </div>
    </div>
   
  );
};

export default Hero;