
import React, { useRef, useEffect } from 'react';
import './Last.css';
import apple from '../../assets/App_Store.png';
import google from '../../assets/Google_Play.png';
import image108 from '../../assets/image 108.png';

function Last() {
  const leftTextRef = useRef(null);
  const rightImageRef = useRef(null);
  const lastContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.8 
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (lastContainerRef.current) {
      observer.observe(lastContainerRef.current);
    }

    return () => {
      if (lastContainerRef.current) {
        observer.unobserve(lastContainerRef.current);
      }
    };
  }, []);

  return (
    <div ref={lastContainerRef} className="last-container">
      <div className="left">
        <div ref={leftTextRef} className="Lefttext">Easy Way to Manage Your Finances</div>
        <div className="leftsmalltext">Easy to use mobile app that supports both Android and iOS.</div>
        <div className="btn-image">
          <div className="apple">
            <img src={apple} alt="apple_store" />
          </div>
          <div className="google">
            <img src={google} alt="google_store" />
          </div>
        </div>
      </div>
      <div className="right">
        <img ref={rightImageRef} src={image108} alt="image" />
      </div>
    </div>
  );
}

export default Last;
