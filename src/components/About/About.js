import React from 'react'
import './About.css';
import slider from '../../assets/logo slider.png'
import student1 from '../../assets/Ellipse.png'
import frame2 from '../../assets/66.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png'

function About() {
    return (
        <div className='about-container'>
            <div className='experience'>
                <div className='values'>
                    <div className='value1'>16y</div>
                    <div className='value2'>Experience</div>
                </div>
                <div className='values'>
                    <div className='value1'>250+</div>
                    <div className='value2'>Merchant Partner</div>
                </div>
                <div className='values'>
                    <div className='value1'>18+</div>
                    <div className='value2'>Years Exp</div>
                </div>
                <div className='values'>
                    <div className='value1'>10.2k+</div>
                    <div className='value2'>Worldwide Client</div>
                </div>
            </div>
            <div className='slider'>
                <img src={slider} alt="slider"/>
            </div>
            <div className='feedbacks'>
                <div className='boxes'>
                    <div className='image66'>
                        <img src={frame2} alt="frame"/>
                    </div>
                    <div className='feedback-text'>"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."</div>
                    <div className='students'>
                        <div className='image'>
                            <img src={student1} alt="image"/>
                        </div>
                        <div className='studentname'>
                            <div className='name'>Hadid Khan</div>
                            <div className='specilization'>UI/UX Designer</div>
                        </div>
                    </div>
                </div>
                <div className='boxes'>
                    <div className='image66'>
                        <img src={frame2} alt="frame"/>
                    </div>
                    <div className='feedback-text'>"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."</div>
                    <div className='students'>
                        <div className='image'>
                            <img src={image2} alt="image"/>
                        </div>
                        <div className='studentname'>
                            <div className='name'>Wade Warren</div>
                            <div className='specilization'>Web Designer</div>
                        </div>
                    </div>
                </div>
                <div className='boxes'>
                    <div className='image66'>
                        <img src={frame2} alt="frame"/>
                    </div>
                    <div className='feedback-text'>"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</div>
                    <div className='students'>
                        <div className='image'>
                            <img src={image3} alt="image"/>
                        </div>
                        <div className='studentname'>
                            <div className='name'>Jenny Wilson</div>
                            <div className='specilization'>Administration</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



