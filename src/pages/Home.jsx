import React from 'react'
import './css/Home.css';
import mainBanner from '../assets/images/main_banner.jpg';

const Home = () => {
  return (
    <div className="main_banner position-relative" style={{
      backgroundImage: `url(${mainBanner})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '700px',
      width: '100%',
    }}>
          <div className="anim-circle1"></div>
          <div className="anim-circle2"></div>
         <div className="slide_text">
              <span className="tag">Caring for life</span>
         </div>
    </div>
  )
}

export default Home