import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className="nav-container">
        <div className='logo'>
            <img src={logo} alt="logo"/>
        </div>
        <div className='nav-items'>
            <div className='items'>Why Us</div>
            <div className='items'>Services</div>
            <div className='items-process'>Our process</div>
            <div className='items'>Payments</div>
            <div className='items'>FAQs</div>
        </div>
        <div className='contact'>
            <button >Contact</button>
        </div>

    </div>
  )
}

export default Navbar