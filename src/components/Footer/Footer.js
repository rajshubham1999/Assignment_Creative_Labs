import React from 'react'
import './Footer.css'
import icon from '../../assets/logo.png'
function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <div className='iconimage'>
                <img src={icon} alt="icon-image"/>
            </div>
            <div className='icontext'>Discover the power of our secure and rewarding credit cards</div>
        </div>
        <div className='footer-right'>
            <div className='Action'>
                <div className='heading'>Action</div>
                <div className='table'>
                   <button className='detail'>Investors</button>
                   <button className='detail'>Features</button>
                   <button className='detail'>Book a Demo</button>
                   <button className='detail'>Security</button>
                </div>
                    
            </div>
            <div className='Action'>
                <div className='heading'>Products</div>
                <div className='table'>
                   <button className='detail'>Credit Cards</button>
                   <button className='detail'>Gift Cards</button>
                   <button className='detail'>Saving Account</button>
                   <button className='detail'>NFT</button>
                </div>
                    
            </div>
            <div className='Action'>
                <div className='heading'>Links</div>
                <div className='table'>
                   <button className='detail'>Documentation</button>
                   <button className='detail'>Free Rewards</button>
                   <button className='detail'>Affiliate Program</button>
                   
                </div>
                    
            </div>
            <div className='Action'>
                <div className='heading'>Social</div>
                <div className='table'>
                   <button className='detail'>Site Maps</button>
                   <button className='detail'>License</button>
                   <button className='detail'>News</button>
                   <button className='detail'>Change Log</button>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Footer