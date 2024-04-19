import React, { useState, useEffect } from 'react';
import '../styles/testimonials.css';
import avatar1 from '../assets/profile.jpg'; // Import the circular image

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Smith',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Jack Black',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Jack Black',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Jack Black',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  return (
    <div className="testimonials-container">
      <h3 className="head text-center mt-20 mb-10">Testimonials</h3>
      <div className="testimonial-slide">
        <div className="carousel-navigation">
          <button onClick={prevSlide} className="prev-arrow">
            &lt;
          </button>
          <button onClick={nextSlide} className="next-arrow">
            &gt;
          </button>
        </div>
        <img src={avatar1} className="testimonial-image" alt="Avatar" />
        <h3>{testimonials[currentSlide].name}</h3>
        <p>{testimonials[currentSlide].text}</p>
        <div className="dots">
          {testimonials.map((_testimonial, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
