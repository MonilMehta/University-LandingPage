import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ heading, desc }) => {
  return (
    <motion.div 
    className='card'
    initial={{ opacity: 0, x: 100 }} // Initial state (hidden and off-screen to the right)
    animate={{ opacity: 1, x: 0 }}    // Animation state (visible and in current position)
    transition={{ duration: 0.5 }}   // Animation duration
  >
      <h4 style={titleStyle}>{heading}</h4>
      <p style={descriptionStyle}>{desc}</p>
    </motion.div>
  );
}



const titleStyle = {
  color: '#0540F2',
  fontSize: '32px',
};

const descriptionStyle = {
  color: '#222222',
  fontSize: '20px',
};

export default Card;
