import React from 'react';
import '../../index.css';


const Hero = () => {
  return (
    <div className="hero" >
      <h1 className="title">V-Queue !</h1>
      <div className="input-wrapper">
        <input type="text" className="inputbox" placeholder="Enter 6 digit pin" />
        <button className="enterBtn">Enter</button>
    </div>
    <button className="cyoBtn cyoText" > Create your own queue</button>
    </div>
   
  );
};

export default Hero;