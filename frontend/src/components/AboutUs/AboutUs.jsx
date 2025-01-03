import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './AboutUs.css';
import { slides } from '../../assets/assets';

const slideImages = [
  {
    url: slides.slide1,
  },
  {
    url: slides.slide2,
  },
  {
    url: slides.slide3,
  }
];

const AboutUs = () => {
  return (

    <div className='slide-container' id='about-us'>
      <h2 className='slide-container-title'>About Us</h2>
      <Slide>
        {slideImages.map((image, index) => (
          <div key={index} className="each-slide">
            <div style={{ backgroundImage: `url(${image.url})` }}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default AboutUs;

