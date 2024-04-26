// Card3.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import '../styles/Card3.css'; // Import CSS file for card styling

const Card3 = ({ title, content, onHover, onHoverExit }) => {
  return (
    <motion.div
      className="card3"
      whileHover={{ y: -150, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }} 
      onMouseEnter={() => onHover(content)}
      onMouseLeave={onHoverExit}
    >
      <h3 className="card-heading3">{title}</h3>
    </motion.div>
  );
};

export default Card3;
