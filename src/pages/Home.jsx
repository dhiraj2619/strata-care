import React from 'react'
import './css/Home.css';
import mainBanner from '../assets/images/main_banner.jpg';

const Home = () => {
  return (
    <div className="main_banner position-relative" style={{
      backgroundImage: `url(${mainBanner})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '800px',
      width: '100%',
    }}>
         
    </div>
  )
}

export default Home