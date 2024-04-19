import React from 'react';

const Card = ({ heading, desc }) => {
  return (
    <div className="card2">
      <h2 style={titleStyle}>{heading}</h2>
      <p style={descriptionStyle}>{desc}</p>
    </div>
  );
};

const titleStyle = {
  color: '#0540F2',
  fontSize: '32px',
};

const descriptionStyle = {
  color: '#222222',
  fontSize: '20px',
};

export default Card;
