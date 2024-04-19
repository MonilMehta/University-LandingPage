import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Mis from '../assets/mission.jpg';
import Vis from '../assets/vision.jpg';
import '../styles/misnvis.css'; 

const MissionnVision = () => {
  return (
    <div className='misnvis'>
      <div className='enquire-content '>
        <h3 className='head'>Our Mission And Vision</h3>
      </div>
      <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay interval={5000} className="custom-carousel">
        <div className="carousel-item">
          <img src={Mis} alt="Mission" className="carousel-image" />
          <div className="carousel-text">
            <p>Our mission is to empower students to achieve their academic goals by providing expert counselling and guidance on MBBS admissions abroad.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Vis} alt="Vision" className="carousel-image" />
          <div className="carousel-text">
            <p>Our vision is to become a leading provider of MBBS admission services in India, recognised for our expertise, professionalism, and commitment to excellence.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MissionnVision;
