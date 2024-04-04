// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import hand_Icon from  '../Assets/img/Icons/hand_icon.png'
import Arrow_Icon from  '../Assets/img/Icons/Arrow.png'
import slider1 from '../Assets/img/slider/slider1.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>New Arrivals Only</h2>
<div>
    <div className="hero-hand-icon">
    <p>New</p>
<img src={hand_Icon}></img>
    </div>
    <p>Collection </p>
    <p>for everyone</p>
</div>


<div className="hero-latest-btn">
            <div>Latest Collention</div>
            <img src={Arrow_Icon}></img>
        </div>
        </div>
        <div className="hero-right">
<img src={slider1}></img>

        </div>
        
    </div>
  )
}

export default Hero