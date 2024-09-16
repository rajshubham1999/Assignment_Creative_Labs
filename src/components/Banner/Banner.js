import React from 'react'
import './Banner.css'
import frame from '../../assets/Frame 21.png';
import card from '../../assets/card.png'

function Banner() {
  return (
    <div className='banner-container'>
        <div className='frame-first'>
            <div className='heading-text'> Discover The Perfect Credit Card For You</div>
            <div className='simple-text'>Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.</div>
            <div className='get-start'>
                <button>GET STARTED</button>
            </div>
            <div className='someimage'>
                <img src={frame} alt="frame"/>
            </div>
        </div>
        <div className='frame-second'>
            <img src={card} alt="card"/>
        </div>
    </div>
  )
}

export default Banner